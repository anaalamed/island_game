// import styled from "styled-components";
import React from "react";

const Message = ({ isGameOver }) => {

    return (
        <>
            {(isGameOver === 1) ?
                (<>
                    <div id="Shape27"><img src="images/Shape27.png" alt="" /></div>
                    <div id="OhtoobadYoulandedon3"><img src="images/OhtoobadYoulandedon3.png" alt="" /></div>
                </>) : null
            }

            {(isGameOver === 0) ?
                (<>
                    <div id="Shape27_0"><img src="images/Shape27_0.png" alt="" /></div>
                    <div id="GreatYoulandedon4You"><img src="images/GreatYoulandedon4You.png" alt="" /></div>
                </>) : null
            }

        </>

    )
}

export default Message;