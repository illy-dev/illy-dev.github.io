interface BannerProps {
    images: {
        src: string,
        name: string
    }[]
}
export default function Banner({ images }:BannerProps) {
    return(
        <div className="flex items-center justify-center">
            <div className="w-[50%] h-24 flex overflow-hidden">

                <div className="flex animate-swipe">
                    {images.map(({ src, name }) => (
                        <div>
                            <img src={src} alt={name} className=" max-w-36 h-24 object-cover pl-3 pr-3" />
                        </div>
                    ))}
                </div>

                <div className="flex animate-swipe">
                    {images.map(({ src, name }) => (
                        <div>
                            <img src={src} alt={name} className=" max-w-36 h-24 object-cover pl-3 pr-3" />
                        </div>
                    ))}
                </div>
                
            </div>
        </div>
    );
}