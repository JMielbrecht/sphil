import { SymposiaCard } from "../SymposiaCard";

export function TableOfContentsExtra() {
    return (
        <>
            <LinkToDiscussion />
            <SymposiaCard />
        </>
    );
}

function LinkToDiscussion() {
    return (
        <a
            // TODO fix classes, nextra no longer uses nx- prefix
            className="nx-text-xs nx-font-medium nx-text-gray-500 hover:nx-text-gray-900 dark:nx-text-gray-400 dark:hover:nx-text-gray-100 contrast-more:nx-text-gray-800 contrast-more:dark:nx-text-gray-50"
            target="_blank"
            href="https://github.com/systemphil/sphil/discussions"
        >
            Share your thoughts 💬{" "}
        </a>
    );
}
