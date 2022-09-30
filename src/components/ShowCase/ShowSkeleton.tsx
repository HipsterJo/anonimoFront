import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={1174}
    min-height={400}
    viewBox="0 0 1174 400"
    backgroundColor="#374151"
    foregroundColor="#464646"

  >
   
    <rect x="0" y="0" width="1174" height="400" />
    
  </ContentLoader>
)

export default Skeleton

