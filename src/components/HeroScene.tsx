import { Canvas } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

function ProfileImage() {
  const texture = useTexture("/IMG20241103184700.jpg");
  
  const shaderMaterial = useMemo(() => {
    return new THREE.ShaderMaterial({
      uniforms: {
        map: { value: texture },
        radius: { value: 0.15 },
        resolution: { value: new THREE.Vector2(512, 512) },
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D map;
        uniform float radius;
        varying vec2 vUv;
        
        float roundedBoxSDF(vec2 pos, vec2 size, float radius) {
          return length(max(abs(pos) - size + radius, 0.0)) - radius;
        }
        
        void main() {
          vec2 center = vUv - 0.5;
          float dist = roundedBoxSDF(center, vec2(0.5), radius);
          
          // Gradient color based on distance from center
          vec3 gradientColor = mix(
            mix(vec3(0.66, 0.33, 0.97), vec3(0.13, 0.82, 0.93), vUv.x),
            vec3(0.06, 0.72, 0.50),
            vUv.y
          );
          
          vec4 texColor = texture2D(map, vUv);
          float edgeGradient = smoothstep(0.1, -0.1, dist);
          vec3 finalColor = mix(gradientColor, texColor.rgb, 0.9 + edgeGradient * 0.1);
          
          gl_FragColor = vec4(finalColor, smoothstep(0.05, -0.05, dist));
        }
      `,
      transparent: true,
    });
  }, [texture]);
  
  return (
    <mesh scale={1.6}>
      <planeGeometry args={[1.5, 2]} />
      <primitive object={shaderMaterial} />
    </mesh>
  );
}

export function HeroScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
    >
      <ambientLight intensity={0.4} />
      <pointLight position={[5, 5, 5]} intensity={1.4} color="#22d3ee" />
      <pointLight position={[-5, -3, -5]} intensity={1.2} color="#a855f7" />
      <Suspense fallback={null}>
        <ProfileImage />
        <Environment preset="city" />
      </Suspense>
    </Canvas>
  );
}
