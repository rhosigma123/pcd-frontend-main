import React from "react";

function MapSection() {
  return (
    <section className="w-full relative h-auto flow-container pb-10 md:pb-20 ">
      <iframe
        className=" "
        src="https://www.google.com/maps/embed/v1/place?q=sovorun+mumbra&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
        width="100%"
        height="400"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
}

export default MapSection;
