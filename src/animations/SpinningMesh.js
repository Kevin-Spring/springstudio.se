import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring/three";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";

/* Component setting up the shapes of the three.js boxes seen on the 3D page */
/* Deconstructing props passed by parent to set the options for the different boxes */
/* Makes it possible to only setup structure of the boxes in this component and determine size color etc in parent-component */
export const SpinningMesh = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  /* Set the rotation of the boxes */
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);

  /* Make the boxes appear larger or smaller onClick */
  const props = useSpring({
    scale: expand ? [1.4, 1.4, 1.4] : [1, 1, 1],
  });

  return (
    <>
      <animated.mesh
        onClick={() => setExpand(!expand)}
        scale={props.scale}
        castShadow
        position={position}
        ref={mesh}
      >
        <boxBufferGeometry attach="geometry" args={args} />
        <MeshWobbleMaterial
          attach="material"
          color={color}
          speed={speed}
          factor={0.6}
        />
      </animated.mesh>
    </>
  );
};
