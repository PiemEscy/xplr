
import { ReactNode } from "react";
import TopNavBarSection from "../sections/TopNavBarSection";
import FooterSection from "../sections/FooterSection";

type DefaultLayoutProps = {
    mainContent?: ReactNode;
};

export default function DefaultLayout({mainContent} : DefaultLayoutProps) {
    return (
        <>
            <TopNavBarSection />

            <div className="grid grid-cols-12 h-[calc(100vh)]">

                {/* Main Content */}
                <div className="col-span-12">
                    <div className="h-[calc(100vh)] overflow-y-auto">
                        {mainContent}
                    </div>
                </div>

            </div>

            <FooterSection />
        </>
    );
}
