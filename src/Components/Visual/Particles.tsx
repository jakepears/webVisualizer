/** @format */
'use client';
import { useEffect } from 'react';
import Particles from 'react-particles';
import * as Tone from 'tone';

export default function ParticlesComponent() {
	useEffect(() => {
		async function init() {
			// Init Tone.js
			await Tone.start();

			// Particles config
			const particles = new Particles({});

			// Load audio
			const player = new Tone.Player({
				url: 'sounds/noMoreLa.m4a',
				loop: true,
			}).toDestination();

			// Create timeline events
			const events = new Tone.Part(
				(time) => {
					// Get audio analysis data
					const analysis = analyzer.getValue();

					// Map analysis data to particles
					particles.setParticleSpeed(analysis.lows * 10);
					particles.setParticleSize(analysis.mids * 5);

					if (analysis.transient > 0.5) {
						particles.burst(20);
					}
				},
				[0, 1, 2, 3, 4, 5, 6, 7]
			);

			// Start transport
			Tone.Transport.start();

			// Schedule events
			events.start(0);

			// Create analyser
			const analyzer = new Tone.Analyser();
			player.connect(analyzer);
		}

		init();
	}, []);

	return <div id='particles'></div>;
}
