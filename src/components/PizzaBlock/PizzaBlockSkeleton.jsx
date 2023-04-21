import React from "react"
import ContentLoader from "react-content-loader"

const PizzaBlockSkeleton = (props) => (
    <ContentLoader
        speed={2}
        width={280}
        height={500}
        viewBox="0 0 280 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
        {...props}
    >
        <circle cx="7" cy="11" r="2" />
        <rect x="0" y="333" rx="15" ry="15" width="280" height="88" />
        <rect x="125" y="435" rx="30" ry="30" width="152" height="45" />
        <rect x="0" y="294" rx="10" ry="10" width="280" height="23" />
        <rect x="0" y="444" rx="10" ry="10" width="90" height="27" />
        <circle cx="136" cy="140" r="122" />
    </ContentLoader>
)

export default PizzaBlockSkeleton;
