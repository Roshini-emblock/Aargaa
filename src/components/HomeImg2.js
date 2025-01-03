import React from "react";
import OverlaySection from "./OverlaySection";

function HomeImg2() {
  return (
    <div
    className="relative h-[500px] bg-cover bg-center"
    style={{
      backgroundImage: `url('https://www.figma.com/design/KKA0bheIaB8MQcXtJwQwqy/Aargaa-Construction?node-id=324-15&t=grfYqLloOxEtFXio-4')`
    }}
  >
      {/* Overlay Section */}
      <OverlaySection />
    </div>
  );
}

export default HomeImg2;
