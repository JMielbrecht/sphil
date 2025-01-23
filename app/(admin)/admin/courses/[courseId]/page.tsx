import Link from "next/link";
import { redirect } from "next/navigation";
import { Heading } from "lib/components/ui/Heading";
import { CourseForm } from "features/courses/components/forms/CourseForm";
import { dbGetCourseAndDetailsAndLessonsById } from "lib/database/dbFuncs";
import { CourseMaterialCard } from "features/courses/components/CourseMaterialCard";
import { errorMessages } from "lib/config/errorMessages";

export const metadata = {};

export default async function AdminCourseEdit({
    params,
}: {
    params: { courseId: string };
}) {
    const { courseId } = await params;
    if (typeof courseId !== "string") {
        redirect(`/?error=${errorMessages.missingParams}`);
    }

    const course = await dbGetCourseAndDetailsAndLessonsById(courseId);

    if (!course) {
        redirect(`/?error=${errorMessages.courseNotFound}`);
    }

    return (
        <div className="my-4 min-h-screen container">
            <Heading as="h2">{course.name}</Heading>
            <div className="grid md:grid-cols-2">
                <div>
                    <CourseForm course={course} />
                </div>

                <div>
                    <Heading as="h4">Course Details</Heading>
                    {course.details ? (
                        <CourseMaterialCard
                            href={`/admin/courses/${courseId}/course-details/${course.details.id}`}
                            heading="General details of the course"
                            id={course.details.id}
                            modelName="CourseDetails"
                        />
                    ) : (
                        <div>
                            <p>None yet.</p>
                            <Link
                                href={`/admin/courses/${courseId}/course-details/new`}
                            >
                                <button className="d-btn d-btn-primary">
                                    Add details
                                </button>
                            </Link>
                        </div>
                    )}
                    <Heading as="h4">Lessons</Heading>
                    {course.lessons.length > 0 ? (
                        <>
                            {course.lessons.map((lesson) => (
                                <CourseMaterialCard
                                    key={lesson.id}
                                    href={`/admin/courses/${course.id}/lessons/${lesson.id}`}
                                    heading={lesson.name}
                                    id={lesson.id}
                                    modelName="Lesson"
                                />
                            ))}
                        </>
                    ) : (
                        <div>
                            <p>None yet.</p>
                        </div>
                    )}
                    <Link href={`/admin/courses/${course.id}/lessons/new`}>
                        <button className="d-btn d-btn-primary">
                            Add a lesson
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
