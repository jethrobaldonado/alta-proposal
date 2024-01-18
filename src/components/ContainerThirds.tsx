import React from "react";

export default function ContainerThirds({ title, children }: {
    title: string,
    children: React.ReactNode
}): React.ReactNode {
    return (
        <div className="container flex pt-20 justify-center justify-items-center">
            <div className="flex sm:flex-col w-2/3">
                <div className="w-1/4 sm:w-full">
                    <h4 className="text-2xl font-serif text-altaDarkOrange">{title}</h4>
                </div>
                <div className="w-3/4 sm:w-full">
                    {children}
                </div>
            </div>
        </div>
    );
}