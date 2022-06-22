import Parallax from "parallax-js";
import { useEffect, useRef } from "react";
import { Box, Center, Heading, Text } from "@chakra-ui/react";

export const Background = () => {
  const sceneEl = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(sceneEl.current, {
      relativeInput: true,
      hoverOnly: true,
    });

    parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, []);

  return (
    <div ref={sceneEl} data-limit-x="10" data-limit-y="28" >
      <div ref={sceneEl} data-depth="0">
        <img
          src="../images/citation1.png"
          alt="shadow background"
        />
      </div>
      <div ref={sceneEl} data-depth="0.6">
        <img src="../images/citation2.png" alt="tentacles" className="background-tentacles"/>
      </div>
      <div ref={sceneEl} data-depth="1.0">
        <img src="../images/citation-sparks2.png" alt="sparks" />
      </div>
      <div ref={sceneEl} data-depth="1.5">
        <img src="../images/citation3-base.png" alt="eyeball base" className="background-eyes"/>
      </div>
      <div ref={sceneEl} data-depth="1.65">
        <img src="../images/citation3-pupil.png" alt="eyeball pupils" className="background-image"/>
      </div>
      <div ref={sceneEl} data-depth="1">
        <img src="../images/citation4.png" alt="characters" />
      </div>
      <div ref={sceneEl} data-depth="1.3">
        <img src="../images/citation-sparks1.png" alt="foreground sparks" />
      </div>
      <div ref={sceneEl} data-depth="1.15">
        <img src="../images/citation4-cliff.png" alt="foreground cliff face" />
      </div>
    </div>
  );
};
