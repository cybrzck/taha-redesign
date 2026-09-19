// import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="flex flex-col items-center">
               

                <div className="mt-5 h-1 w-32 overflow-hidden bg-neutral-200">
                    <div className="h-full w-1/2 animate-loading bg-taha" />
                </div>

                <p className="mt-3 text-xs font-medium tracking-[0.2em] text-taha-dark">
                    LOADING
                </p>
            </div>
        </div>
    );
}