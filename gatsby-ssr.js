import React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
    <script src="/particles.min.js" key="particle-test" defer />
  ]);
};