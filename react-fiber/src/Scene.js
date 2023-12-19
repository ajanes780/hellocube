import {useFrame, extend, useThree } from '@react-three/fiber'
import {useRef} from "react";
import {OrbitControls} from "@react-three/drei";
export const Scene = () => {

    const cubeRef = useRef(null)
    const cubeRef2 = useRef(null)
    // const groupRef = useRef(null)
    const {camera, gl} = useThree()
    console.log("gl", gl.domElement)


    useFrame((state, delta) => {
     cubeRef.current.rotation.x += delta
     cubeRef2.current.rotation.x -= delta
    })


    return (
        <>
            <OrbitControls  args={[camera, gl.domElement]} />

            <mesh ref={cubeRef2} position-x={-1}>
                <boxGeometry />
                <meshBasicMaterial color="orange" />
            </mesh>
            <mesh ref={cubeRef} position-x={1}>
                <boxGeometry />
                <meshBasicMaterial color="purple" />
            </mesh>
        </>
    )
}