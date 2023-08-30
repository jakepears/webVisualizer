/** @format */
'use client'
import { Canvas, useFrame } from '@react-three/fiber';
import {
	Lightformer,
	Text,
	Html,
	ContactShadows,
	Environment,
} from '@react-three/drei';
import { EffectComposer, N8AO, TiltShift2 } from '@react-three/postprocessing';
import { easing } from 'maath';

function Rig() {
    useFrame((state, delta) => {
        easing.damp3(
            state.camera.position,
            [
                Math.sin(-state.pointer.x) * 5,
                state.pointer.y * 3.5,
                15 + Math.cos(state.pointer.x) * 10,
            ],
            0.2,
            delta
        );
        state.camera.lookAt(0, 0, 0);
    });
    return null;
}

export default function BgScene(){
	return (
		<Canvas
			eventPrefix='client'
			shadows
			camera={{ position: [0, 0, 15], fov: 75 }}>
			<color attach='background' args={['#1c1c1c']} />
			<spotLight position={[20, 20, 10]} penumbra={1} castShadow angle={0.2} />
			<Status position={[0, 0, -10]} />
			<ContactShadows
				scale={100}
				position={[0, -7.5, 0]}
				blur={1}
				far={100}
				opacity={0.85}
			/>
			<Environment preset='city'>
				<Lightformer
					intensity={8}
					position={[10, 5, 0]}
					scale={[10, 50, 1]}
					onUpdate={(self) => self.lookAt(0, 0, 0)}
				/>
			</Environment>
			<EffectComposer disableNormalPass>
				<N8AO aoRadius={1} intensity={1.5} />
				<TiltShift2 blur={0.125} />
			</EffectComposer>
			<Rig />
		</Canvas>
	);
}

function Status(props : any) {
	const text = 'visualize';
	const jump = 'jump in'
	return (
		<Text
			fontSize={16}
			letterSpacing={-0.015}
			color=''
			{...props}>
			{text}
			<Html className='absolute text-wildSand text-2xl text-center font-normal px-12 py-4 rounded-[3.125rem] border-silver border-[2px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hover:border-none hover:border-codGray hover:text-codGray hover:bg-wildSand hover:scale-110 duration-[350ms] transition ease-in-out' transform>
				{jump}
			</Html>
		</Text>
	);
}
