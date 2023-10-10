import React, { useEffect } from "react";

const GoogleAdvertise = ({
  className = "adsbygoogle",
  client = "",
  slot = "",
  format = "",
  responsive = ""
}) => {
  useEffect(() => {
    try {
      (window.adsbygoogle = window.adsbygoogle || []).push({});
      console.log("Advertise is pushed");
    } catch (e) {
      if (process.env.NODE_ENV !== "production")
        console.error("AdvertiseError", e);
    }
  }, []);
  return (
    <ins
      className={className}
      style={{
        display: "block"
      }}
      data-ad-client={client}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={responsive}
    />
  );
};

export default GoogleAdvertise