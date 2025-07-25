import { Float, OrbitControls, Stars } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import * as THREE from 'three';

const AnimatedSphere = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <ambientLight intensity={0.6} />
      <directionalLight position={[2, 2, 2]} />
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} />
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh>
          <circleGeometry args={[1.8, 64]} />
          <meshStandardMaterial>
            <primitive attach="map" object={new THREE.TextureLoader().load('../assets/images/formal.png')} />
          </meshStandardMaterial>
        </mesh>
      </Float>
      <OrbitControls enableZoom={false} autoRotate />
    </Canvas>
  );
};

export default AnimatedSphere;
