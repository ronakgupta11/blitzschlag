import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import desert from "../../public/assets/models/desert_landscape.glb";
export function Desert(props) {
  const { nodes, materials } = useGLTF(desert);
  return (
    <group {...props} dispose={null}>
      <group scale={0.50}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={191.328}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0_1.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0_2.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0_3.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0_4.geometry}
            material={materials["Material.001"]}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.Plane_Material001_0_5.geometry}
            material={materials["Material.001"]}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(desert);