import React from 'react'
import ContentLoader from 'react-content-loader'

const HeadBodyGrid = ({ ...rest }) => (
        <ContentLoader height="800" width="1174" viewBox="0 0 1174 800"
                       backgroundColor="#192026"
                       foregroundColor="#7a7a7a"
                       {...rest}>

        <rect  width="1174" height="800" />

    </ContentLoader>
)



export default HeadBodyGrid