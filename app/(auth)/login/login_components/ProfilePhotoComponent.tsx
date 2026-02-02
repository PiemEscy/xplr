import SkeletonLineComponent from "@/app/components/SkeletonLineComponent";

type ProfilePhotoSectionProps = {
    className?: string;
    loading?: boolean;
};

export default function ProfilePhotoComponent({
    className = "",
    loading = false,
}: ProfilePhotoSectionProps) {

    const profilePhotoDimension =
        "w-16 h-16 md:w-64 md:h-64 lg:w-64 lg:h-64 mx-auto mb-3";

    const getProfilePhoto = () => {
        return "/img/icon/PMicon.png";
    };

    return (
        <div
            className={`flex flex-col items-center text-center py-4 ${className}`}
        >
            {loading ? (
                <>
                    <SkeletonLineComponent variant="circle" className={profilePhotoDimension} />
                    <SkeletonLineComponent className="w-24 h-4 mb-2" />
                    <SkeletonLineComponent className="w-24 h-4 mb-1 sm:mb-1 md:mb-1 lg:mb-2" />
                </>
            ) : (
                <>
                    <div
                        className={`${profilePhotoDimension} rounded-full bg-center bg-cover`}
                        style={{ backgroundImage: `url(${getProfilePhoto()})` }}
                    />
                    <h2 className="app-default-font-size-h5 font-bold app-text-theme-color-partner">
                        XPLR
                    </h2>
                    <p className="app-default-font-size app-text-theme-secondary-color-mirror leading-relaxed">
                        EXPLORE - My personal playground to explore ideas, test new features, 
                        and see what I can create next.
                    </p>
                </>
            )}
        </div>
    );
}
