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
                    <div className="relative z-10 max-w-md text-center">
                        <div
                            className={`${profilePhotoDimension} rounded-full bg-center bg-cover`}
                            style={{ backgroundImage: `url(${getProfilePhoto()})` }}
                        />
                        <p className="text-lg text-neutral-400 leading-relaxed">
                            My personal playground to explore ideas, test new features, and see what I can create next.
                        </p>
                    </div>
                </>
            )}
        </div>
    );
}
