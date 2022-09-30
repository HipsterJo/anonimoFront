import React from "react";


import SortComponent from "../../components/FilterComponents/SortComponent/SortComponent";

import SkeletonCard from "../../components/AnimeCard/SkeletonCard";

const SkeletonAnList: React.FC = () => {
    return (

        <div className="flex max-w-[1174px] my-12 mx-auto">
            <div className="flex flex-col mx-auto">

                <SortComponent/>
                <div className="px-6 flex  gap-5 flex-wrap justify-around">
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                    <SkeletonCard/>
                </div>
            </div>
            <div className="{s.fileters}">

            </div>
        </div>
    );

}

export default SkeletonAnList;