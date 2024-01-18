'use client';
import dynamic from "next/dynamic";

const ReactPhotoSphereViewer = dynamic(
    () =>
        import('react-photo-sphere-viewer').then(
            (mod) => mod.ReactPhotoSphereViewer
        ),
    {
        ssr: false,
    }
);
export default function Home() {
    return (
        <main className="w-screen h-screen font-sans overflow-hidden">
            <ReactPhotoSphereViewer defaultZoomLvl={0} src="/images/5.jpg" height={'100vh'} width={'100vw'} />
        </main>
    )
}
