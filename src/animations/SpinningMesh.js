import React, { useState, useRef } from "react";
import { useSpring, animated } from "react-spring/three";
import { useFrame } from "react-three-fiber";
import { MeshWobbleMaterial } from "drei";

export const SpinningMesh = ({ position, args, color, speed }) => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

  const [expand, setExpand] = useState(false);

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
