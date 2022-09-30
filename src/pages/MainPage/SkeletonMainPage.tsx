import React from "react";

import SkeletonNewRelease from "../../components/NewRelease/Skeleton";
import SkeletonShowCase from "../../components/ShowCase/SkeletonShowCase";

const MainPage:React.FC = () => {

    return (
        <>

        <div className = "flex flex-col max-w-[1174px] mx-auto my-12">
            <div className="my-2 font-w-normal font-xl ">
                <h2>Аниме дня</h2>

            </div>
            <SkeletonShowCase />
            <div className="my-2 font-w-normal font-xl ">
                <h2>Новыe релизы</h2>
            </div>
            <SkeletonNewRelease />

        </div>
        </>
    );
};

export default MainPage;