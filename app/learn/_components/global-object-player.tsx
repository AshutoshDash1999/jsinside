"use client"

import { Player } from "@remotion/player"
import { GlobalObjectComposition } from "./remotion/global-object-composition"

function PlayerThumbnail() {
	return (
		<svg viewBox="0 0 640 360" width="640" height="360">
			<defs>
				<linearGradient id="bgGrad" x1="0%" y1="0%" x2="0%" y2="100%">
					<stop offset="0%" stopColor="#0f172a" />
					<stop offset="100%" stopColor="#1e293b" />
				</linearGradient>
			</defs>
			<rect width="640" height="360" fill="url(#bgGrad)" />

			{/* Left box - window */}
			<rect x="60" y="90" width="200" height="180" fill="none" stroke="#a78bfa" strokeWidth="2" rx="6" />
			<text x="80" y="120" fontSize="18" fill="#a78bfa" fontWeight="bold">
				window {}
			</text>
			<text x="80" y="150" fontSize="14" fill="#cbd5e1" fontFamily="monospace">
				console
			</text>
			<text x="80" y="175" fontSize="14" fill="#cbd5e1" fontFamily="monospace">
				setTimeout
			</text>
			<text x="80" y="200" fontSize="14" fill="#cbd5e1" fontFamily="monospace">
				document
			</text>
			<text x="80" y="225" fontSize="14" fill="#cbd5e1" fontFamily="monospace">
				location
			</text>

			{/* Right box - this */}
			<rect x="380" y="90" width="200" height="180" fill="none" stroke="#06b6d4" strokeWidth="2" rx="6" />
			<text x="430" y="190" fontSize="20" fill="#06b6d4" fontWeight="bold">
				this
			</text>

			{/* Connection */}
			<path d="M 260 180 L 380 180" stroke="#10b981" strokeWidth="2" />
			<text x="300" y="170" fontSize="14" fill="#10b981" fontWeight="bold">
				===
			</text>

			{/* Play icon */}
			<circle cx="320" cy="340" r="24" fill="#a78bfa" opacity="0.2" />
			<polygon
				points="314,330 314,350 330,340"
				fill="#a78bfa"
				opacity="0.6"
			/>

			{/* Caption */}
			<text
				x="320"
				y="30"
				fontSize="16"
				fill="#cbd5e1"
				textAnchor="middle"
				fontWeight="500"
			>
				Global Object & this Keyword
			</text>
		</svg>
	)
}

export function GlobalObjectPlayer() {
	return (
		<div style={{ width: "100%", marginBottom: "2rem" }}>
			<div
				style={{
					width: "100%",
					borderRadius: "0.75rem",
					overflow: "hidden",
					backgroundColor: "#0f172a",
				}}
			>
				<Player
					component={GlobalObjectComposition}
					durationInFrames={390}
					compositionWidth={640}
					compositionHeight={360}
					fps={30}
					controls
					autoPlay={false}
					style={{
						width: "100%",
					}}
				/>
			</div>
		</div>
	)
}
