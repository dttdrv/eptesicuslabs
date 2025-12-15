'use client';

import { useMemo, useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Line } from '@react-three/drei';
import * as THREE from 'three';

function Network({ count = 100 }) {
    const points = useMemo(() => {
        const p = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Create a sphere distribution
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const r = 4 + Math.random() * 2; // Radius between 4 and 6

            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            p[i * 3] = x;
            p[i * 3 + 1] = y;
            p[i * 3 + 2] = z;
        }
        return p;
    }, [count]);

    const connections = useMemo(() => {
        // Basic connections: connect close points
        // This is expensive to calculate every frame, so we do it once.
        // However, basic "Lines" in Drei takes points, not segments.
        // For a complex network, we might want "LineSegments".
        // Let's create a list of vertices for segments.
        const segments = [];
        for (let i = 0; i < count; i++) {
            for (let j = i + 1; j < count; j++) {
                const dx = points[i * 3] - points[j * 3];
                const dy = points[i * 3 + 1] - points[j * 3 + 1];
                const dz = points[i * 3 + 2] - points[j * 3 + 2];
                const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
                if (dist < 2.5) { // Connection threshold
                    segments.push(
                        new THREE.Vector3(points[i * 3], points[i * 3 + 1], points[i * 3 + 2]),
                        new THREE.Vector3(points[j * 3], points[j * 3 + 1], points[j * 3 + 2])
                    );
                }
            }
        }
        return segments;
    }, [points, count]);

    const ref = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.05;
            ref.current.rotation.x += delta * 0.02;
        }
    });

    return (
        <group ref={ref}>
            <Points positions={points} stride={3} frustumCulled={false}>
                <PointMaterial
                    transparent
                    color="#2D6CDF"
                    size={0.05}
                    sizeAttenuation={true}
                    depthWrite={false}
                    opacity={0.8}
                />
            </Points>
            {/* 
        Line rendering in Three.js can be tricky. 
        Using simple Line from Drei for segments.
        If many segments, this might be slow, but for <100 points it's fine.
      */}
            <Line
                points={connections}
                color="#B8B8B8"
                lineWidth={1}
                transparent
                opacity={0.2}
            />
        </group>
    );
}

export default function CrystallineNetwork() {
    return (
        <div className="absolute inset-0 -z-10 opacity-60 pointer-events-none">
            <Canvas camera={{ position: [0, 0, 10], fov: 60 }} gl={{ alpha: true }}>
                <fog attach="fog" args={['#F7F7F7', 5, 20]} />
                <ambientLight intensity={0.5} />
                <Network />
            </Canvas>
        </div>
    );
}
