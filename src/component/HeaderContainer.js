import React from "react";
import HeaderClock from './HeaderClock.js'
import headerImage from '../images/headerImage.png'

function HeaderContainer(props) {
    return <div className="animate-header-linear-infinite h-[280px] bg-fixed" style={{backgroundImage: `url(${headerImage})`}}>
            <h1 className="text-3xl font-bold underline">{props.x}</h1>
            <HeaderClock />
        </div>
}

export default HeaderContainer;