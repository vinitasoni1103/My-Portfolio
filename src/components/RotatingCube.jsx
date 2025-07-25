import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[1.5, 1.5, 1.5]} />
      <meshStandardMaterial color="#00ffff" />
      <ambientLight intensity={0.5} />
    </mesh>
  );
};

export default RotatingCube;
