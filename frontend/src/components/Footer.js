import React from "react";

function Footer({ textFooter }) {
  return (
    <div className="card-footer fixed-bottom flex-fill bg-info text-white">
      {textFooter}
    </div>
  );
}
export default Footer;
