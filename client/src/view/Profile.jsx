import styled from "styled-components";
import React from "react";

const Profile = () => {
    const wins = 1;
    const losing = 5;


    return (
        <Box>
            <p>Wins: {wins}</p>
            <p>Losing: {losing}</p>

        </Box>
    )
}

export default Profile;