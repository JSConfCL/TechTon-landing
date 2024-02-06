import Image from "next/image";

export function Timeline({ data }) {
    return (
        <>
            <ol className="relative border-s-2 py-10">
                {data.map((item, index) => (
                    <li key={index} className="mb-10 ms-8">
                        <span className="absolute mt-2 flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full -start-6">
                            <Image className="rounded-full" src={item.image} alt={item.name} width="100" height="100" />
                        </span>
                        <time className="mb-1 text-sm font-light leading-none">{item.startHour} - {item.endHour}</time>
                        <h3 className="text-lg font-bold">{item.name}</h3>
                        <p className="text-base font-normal">{item.topic}</p>
                        {item.community !== "ninguna" && (
                            <p className="text-sm font-bold text-gray-400">
                                <a href={item.communityUrl} target="_blank">{item.community}</a>
                            </p>
                        )}
                    </li>
                ))}
            </ol>
        </>
    );
}
