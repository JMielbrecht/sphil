GRANT INSERT, SELECT, UPDATE ON TABLE defaultdb."Account", defaultdb."Course", defaultdb."User" TO oss_developer;

GRANT INSERT, SELECT, UPDATE, DELETE ON TABLE defaultdb."CourseDetails", defaultdb."Lesson", defaultdb."LessonContent", defaultdb."LessonTranscript", defaultdb."MaintenanceMessage", defaultdb."NewsletterEmail", defaultdb."Part", defaultdb."Session", defaultdb."StripeEvent", defaultdb."UserLessonProgress", defaultdb."VerificationToken", defaultdb."Video", defaultdb."_CourseToUser", defaultdb."_prisma_migrations" TO oss_developer;