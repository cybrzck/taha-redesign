import Image from "next/image";

export default function Loading() {
    return (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
            <div className="flex w-full max-w-xs flex-col items-center px-6">
                <div className="flex items-center justify-center  p-3">
                    <Image
                        src="/taha-logo.png"
                        alt="TAHA"
                        width={104}
                        height={64}
                        priority
                        className="h-full w-full object-contain"
                    />
                </div>

                <div className="mt-5 text-center">
                    <p className="text-lg font-bold tracking-tight text-taha-dark">
                        Tanzania Horticulture Association
                    </p>
                    
                </div>

                <div className="mt-10 h-[2px] w-40 overflow-hidden bg-neutral-200">
                    <div className="h-full w-1/2 animate-loading bg-taha" />
                </div>

                <p className="mt-4 text-[10px] font-bold tracking-[0.3em] text-taha-dark">
                    LOADING
                </p>
            </div>
        </div>
    );
}