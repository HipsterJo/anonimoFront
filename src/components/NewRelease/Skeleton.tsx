import React from "react";



import SkeletonCard from "../AnimeCard/SkeletonCard";

const SkeletonNewRealese = () => {

    return (
        <div className = "">
            <div className="max-w-[1174px] gap-1 flex justify-around flex-wrap">
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
                <SkeletonCard />
            </div>
        </div>
    );
};

  export default SkeletonNewRealese;