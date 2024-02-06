export function Timeline() {
    return (
        <>
            <ol className="relative border-s-2 py-10">
                <li className="mb-10 ms-8">
                    <span className="absolute mt-2 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full -start-6">
                        <img className="rounded-full" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-light leading-none">February 2022</time>
                    <h3 className="text-lg font-bold">Application UI code in Tailwind CSS</h3>
                    <p className="text-base font-normal">Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce & Marketing pages.</p>
                    <p className="text-sm font-bold text-gray-400">Comunidad</p>
                </li>
                <li className="mb-10 ms-8">
                    <span className="absolute mt-2 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full -start-6">
                        <img className="rounded-full" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-light leading-none">March 2022</time>
                    <h3 className="text-lg font-bold">Marketing UI design in Figma</h3>
                    <p className="text-base font-normal">All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.</p>
                    <p className="text-sm font-bold text-gray-400">Comunidad</p>
                </li>
                <li className="mb-10 ms-8">
                    <span className="absolute mt-2 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full -start-6">
                        <img className="rounded-full" src="images/speakers/agustin-soto.webp" alt="Bonnie image" />
                    </span>
                    <time className="mb-1 text-sm font-light leading-none">April 2022</time>
                    <h3 className="text-lg font-bold">E-Commerce UI code in Tailwind CSS</h3>
                    <p className="text-base font-normal">Get started with dozens of web components and interactive elements built on top of Tailwind CSS.</p>
                    <p className="text-sm font-bold text-gray-400">Comunidad</p>
                </li>
            </ol>
        </>
    );
}