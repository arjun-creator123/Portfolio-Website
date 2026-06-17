import { Canvas } from "@react-three/fiber";
import { useTexture, Environment } from "@react-three/drei";
import { Suspense, useMemo } from "react";
import * as THREE from "three";

function ProfileImage() {
  const texture = useTexture(`${import.meta.env.BASE_URL}IMG20241103184700.jpg`);
  
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
          
          // Sample the original texture (shape and aspect ratio unchanged)
          vec4 texColor = texture2D(map, vUv);
          
          // Neon colors matching the reference image: cyan and magenta/pink
          vec3 neonCyan = vec3(0.0, 0.92, 1.0);
          vec3 neonMagenta = vec3(1.0, 0.07, 0.8);
          
          // Gradient transitioning from magenta at the bottom to cyan on the sides/top
          vec3 borderColor = mix(neonMagenta, neonCyan, smoothstep(0.0, 0.35, vUv.y));
          
          // Crisp border line sitting just inside the cropped boundary
          float border = smoothstep(0.008, 0.0, abs(dist + 0.008));
          
          // Soft inner glow fading inwards
          float glow = exp(-40.0 * abs(dist + 0.008));
          
          // Combine original photo color with the border and glow (softened/faded style)
          vec3 finalColor = mix(texColor.rgb, borderColor, border * 0.55);
          finalColor += borderColor * glow * 0.35;
          
          // Crop to the rounded rectangle shape
          float alpha = smoothstep(0.01, -0.01, dist);
          
          gl_FragColor = vec4(finalColor, alpha);
        }
      `,
      transparent: true,
    });
  }, [texture]);
  
  return (
    <mesh scale={1.85}>
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
