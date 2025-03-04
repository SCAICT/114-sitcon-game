import React from 'react';

const PixelLogo = React.memo(() => (
  <div className="text-center mb-6">
    <div className="pixel-logo">
      <div className="s"></div>
      <div className="c"></div>
      <div className="a"></div>
      <div className="i"></div>
      <div className="c"></div>
      <div className="t"></div>
    </div>
    <div className="text-xs mt-2 text-purple-300 pixel-text">
      SCAICT 中部高中電資社團聯合會議
    </div>
  </div>
));

export default PixelLogo;
