import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import { css } from "@emotion/core";

const override = css `
  display: block;
  margin: 0 auto;
  border-color: red;
`;

export const Loading = () => (
    <section class="main-container">
        <div class="location" id="home">
            <ClipLoader css={override} size={150} color={"#123abc"}/>
        </div>
    </section>

)