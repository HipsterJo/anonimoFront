import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={170}
    height={254}
    viewBox="0 0 170 254"
    backgroundColor="#374151"
    foregroundColor="#464646"

  >
   
    <rect x="0" y="0"  width="170" height="254" />
    
  </ContentLoader>
)

export default Skeleton

