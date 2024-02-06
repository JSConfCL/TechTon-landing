export function Timeline() {
    return (
        <>
            <ol className="relative border-s border-gray-200 dark:border-gray-700">
                <li className="mb-10 ms-8">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5">
                        <img className="rounded-full shadow-lg" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                </li>
                <li className="mb-10 ms-8">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5">
                        <img className="rounded-full shadow-lg" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li className="mb-10 ms-8">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5">
                        <img className="rounded-full shadow-lg" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>
        </>
    );
}