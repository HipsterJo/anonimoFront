import React from "react";
import ShowSkeleton from "./ShowSkeleton";


const SkeletonShowCase:React.FC = () => {


    return (

        <div className="flex  min-h-[400px] max-w-[1174px] rounded  my-5">

                <ShowSkeleton/>
        </div>
    );
};

export default SkeletonShowCase;