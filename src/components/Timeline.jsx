export function Timeline() {
    return (
        <>
                <li className="mb-10 ms-8">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5">
                        <img className="rounded-full shadow-lg" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-normal leading-none">February 2022</time>
                    <h3 className="text-lg font-semibold">Application UI code in Tailwind CSS</h3>
                    <p className="mb-4 text-base font-normal">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                </li>
                <li className="mb-10 ms-8">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5">
                        <img className="rounded-full shadow-lg" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-normal leading-none">March 2022</time>
                    <h3 className="text-lg font-semibold">Marketing UI design in Figma</h3>
                    <p className="text-base font-normal">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                </li>
                <li className="mb-10 ms-8">
                    <span className="absolute flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full -start-5">
                        <img className="rounded-full shadow-lg" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-normal leading-none">April 2022</time>
                    <h3 className="text-lg font-semibold">E-Commerce UI code in Tailwind CSS</h3>
                    <p className="text-base font-normal">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                </li>
            </ol>
        </>
    );
}