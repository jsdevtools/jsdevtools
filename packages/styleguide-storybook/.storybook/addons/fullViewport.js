import React from 'react';
export const fullViewport = story => (
  <>
    <style>
      {`
      html, body, #root { 
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
      }
      #root>div {
        margin: 0;
        padding: 0;
        min-height: 100%;
      }
      `}
    </style>
    {story()}
  </>
);
