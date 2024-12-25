import { Video } from "@prisma/client";
import { VideoViewer } from "./VideoViewer";
import { bucketGenerateReadSignedUrl } from "lib/bucket/bucketFuncs";

export async function VideoDataLoader({ videoEntry }: { videoEntry: Video }) {
    try {
        const videoUrl = await bucketGenerateReadSignedUrl({
            id: videoEntry.id,
            fileName: videoEntry.fileName,
        });
        return <VideoViewer videoUrl={videoUrl} />;
    } catch (error) {
        console.error(error);
        return (
            <div className="flex items-center justify-center w-full h-full">
                <div className="text-center mt-4">
                    <h1 className="text-2xl font-semibold">Error ⛓️‍💥</h1>
                    <p className="text-sm text-gray-500">
                        Unable to load video
                    </p>
                </div>
            </div>
        );
    }
}
