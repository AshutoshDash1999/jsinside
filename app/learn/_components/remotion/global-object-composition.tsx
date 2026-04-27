import {
	AbsoluteFill,
	Sequence,
	interpolate,
	useCurrentFrame,
} from "remotion"

function SceneCaption({ text }: { text: string }) {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 15], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	return (
		<div
			style={{
				fontSize: "16px",
				color: "#e2e8f0",
				textAlign: "center",
				opacity,
				fontWeight: 500,
			}}
		>
			{text}
		</div>
	)
}

function CodeBlock({ code }: { code: string }) {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 10], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	return (
		<div
			style={{
				fontFamily: "monospace",
				fontSize: "18px",
				color: "#a78bfa",
				opacity,
				backgroundColor: "#1e293b",
				padding: "12px 16px",
				borderRadius: "4px",
			}}
		>
			{code}
		</div>
	)
}

function WindowBox({
	opacity,
	properties,
}: {
	opacity: number
	properties: string[]
}) {
	return (
		<svg viewBox="0 0 300 280" width="300" height="280" style={{ opacity }}>
			{/* Box outline */}
			<rect
				x="20"
				y="20"
				width="260"
				height="240"
				fill="none"
				stroke="#a78bfa"
				strokeWidth="2"
				rx="6"
			/>
			{/* Label */}
			<text x="30" y="45" fontSize="18" fill="#a78bfa" fontWeight="bold">
				window {}
			</text>
			{/* Properties */}
			{properties.map((prop, i) => (
				<text
					key={i}
					x="40"
					y={70 + i * 24}
					fontSize="14"
					fill="#cbd5e1"
					opacity={Math.min(1, (i + 1) * 0.3)}
					fontFamily="monospace"
				>
					{prop}
				</text>
			))}
		</svg>
	)
}

function ThisBox({ opacity }: { opacity: number }) {
	return (
		<svg viewBox="0 0 280 240" width="280" height="240" style={{ opacity }}>
			<rect
				x="20"
				y="20"
				width="240"
				height="200"
				fill="none"
				stroke="#06b6d4"
				strokeWidth="2"
				rx="6"
			/>
			<text x="30" y="50" fontSize="18" fill="#06b6d4" fontWeight="bold">
				this
			</text>
		</svg>
	)
}

function Scene1() {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 30, 60], [0, 1, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	return (
		<AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
			<div style={{ padding: "40px", color: "#e2e8f0", opacity }}>
				<div
					style={{
						fontSize: "20px",
						fontFamily: "monospace",
						backgroundColor: "#1e293b",
						padding: "20px",
						borderRadius: "8px",
						marginBottom: "40px",
					}}
				>
					<span style={{ color: "#9ca3af" }}>// script.js</span>
					<br />
					<span style={{ color: "#6b7280" }}>{/* empty */}</span>
				</div>
				<SceneCaption text="The shortest JS program — an empty file." />
			</div>
		</AbsoluteFill>
	)
}

function Scene2() {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 20, 60], [0, 1, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	return (
		<AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					padding: "40px",
					height: "100%",
					opacity,
				}}
			>
				<svg viewBox="0 0 140 120" width="140" height="120">
					<rect
						x="10"
						y="10"
						width="120"
						height="100"
						fill="none"
						stroke="#a78bfa"
						strokeWidth="2"
						rx="4"
					/>
					<text x="20" y="40" fontSize="14" fill="#a78bfa">
						Global
					</text>
					<text x="20" y="60" fontSize="14" fill="#a78bfa">
						Object
					</text>
				</svg>
				<svg viewBox="0 0 140 120" width="140" height="120">
					<rect
						x="10"
						y="10"
						width="120"
						height="100"
						fill="none"
						stroke="#06b6d4"
						strokeWidth="2"
						rx="4"
					/>
					<text x="40" y="65" fontSize="16" fill="#06b6d4" fontWeight="bold">
						this
					</text>
				</svg>
			</div>
			<div style={{ position: "absolute", bottom: "40px", width: "100%" }}>
				<SceneCaption text="Engine auto-creates a Global Execution Context." />
			</div>
		</AbsoluteFill>
	)
}

function Scene3() {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 20, 60], [0, 1, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})
	const builtinsOpacity = interpolate(frame, [10, 30, 60], [0, 1, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	return (
		<AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
			<div style={{ padding: "40px", height: "100%", opacity }}>
				<WindowBox
					opacity={builtinsOpacity}
					properties={["console", "setTimeout", "document", "location"]}
				/>
				<div style={{ position: "absolute", bottom: "40px", width: "100%" }}>
					<SceneCaption text="In browsers, the global object is `window`." />
				</div>
			</div>
		</AbsoluteFill>
	)
}

function Scene4() {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 20, 60], [0, 1, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})
	const connectionOpacity = interpolate(frame, [15, 35, 60], [0, 1, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	return (
		<AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					padding: "40px",
					height: "100%",
					opacity,
				}}
			>
				<svg viewBox="0 0 450 200" width="450" height="200">
					{/* window box */}
					<rect
						x="30"
						y="40"
						width="140"
						height="120"
						fill="none"
						stroke="#a78bfa"
						strokeWidth="2"
						rx="4"
					/>
					<text x="45" y="65" fontSize="14" fill="#a78bfa" fontWeight="bold">
						window
					</text>

					{/* this box */}
					<rect
						x="280"
						y="40"
						width="140"
						height="120"
						fill="none"
						stroke="#06b6d4"
						strokeWidth="2"
						rx="4"
					/>
					<text x="310" y="100" fontSize="16" fill="#06b6d4" fontWeight="bold">
						this
					</text>

					{/* Connection arc */}
					<path
						d="M 170 100 Q 225 50 280 100"
						stroke="#10b981"
						strokeWidth="2"
						fill="none"
						opacity={connectionOpacity}
						strokeDasharray="200"
						strokeDashoffset={200 * (1 - connectionOpacity)}
					/>
					<text
						x="210"
						y="75"
						fontSize="14"
						fill="#10b981"
						opacity={connectionOpacity}
					>
						===
					</text>
				</svg>
			</div>
			<div style={{ position: "absolute", bottom: "40px", width: "100%" }}>
				<SceneCaption text="At global scope, this always points to the global object." />
			</div>
		</AbsoluteFill>
	)
}

function Scene5() {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 15, 90], [0, 1, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	const codeOpacity1 = interpolate(frame, [0, 10], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	const arrowOpacity1 = interpolate(frame, [15, 35], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	const propertyOpacity1 = interpolate(frame, [25, 40], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	const codeOpacity2 = interpolate(frame, [40, 50], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	const arrowOpacity2 = interpolate(frame, [55, 75], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	const propertyOpacity2 = interpolate(frame, [65, 80], [0, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	return (
		<AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
			<div style={{ padding: "40px", height: "100%", opacity }}>
				{/* Code sections */}
				<div style={{ marginBottom: "20px", opacity: codeOpacity1 }}>
					<CodeBlock code="var x = 10" />
				</div>

				{/* SVG with window and arrow */}
				<svg viewBox="0 0 400 200" width="400" height="200">
					{/* Arrow 1 */}
					<path
						d="M 80 20 L 80 40"
						stroke="#fbbf24"
						strokeWidth="2"
						opacity={arrowOpacity1}
						markerEnd="url(#arrowhead)"
					/>

					{/* window box with x property */}
					<rect
						x="20"
						y="60"
						width="140"
						height="100"
						fill="none"
						stroke="#a78bfa"
						strokeWidth="2"
						rx="4"
					/>
					<text x="35" y="85" fontSize="14" fill="#a78bfa" fontWeight="bold">
						window
					</text>
					<text
						x="35"
						y="110"
						fontSize="12"
						fill="#cbd5e1"
						fontFamily="monospace"
						opacity={propertyOpacity1}
					>
						x: 10
					</text>
					<text
						x="35"
						y="130"
						fontSize="12"
						fill="#cbd5e1"
						fontFamily="monospace"
						opacity={propertyOpacity2}
					>
						greet: ƒ
					</text>
				</svg>

				{/* Code 2 */}
				<div style={{ marginTop: "20px", opacity: codeOpacity2 }}>
					<CodeBlock code="function greet() {}" />
				</div>

				<div style={{ position: "absolute", bottom: "40px", width: "100%" }}>
					<SceneCaption text="Anything declared at global level is auto-attached to window." />
				</div>
			</div>
		</AbsoluteFill>
	)
}

function Scene6() {
	const frame = useCurrentFrame()
	const opacity = interpolate(frame, [0, 20, 60], [0, 1, 1], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	})

	return (
		<AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
			<div
				style={{
					display: "flex",
					justifyContent: "space-around",
					alignItems: "center",
					padding: "40px",
					height: "100%",
					opacity,
				}}
			>
				{/* Browser */}
				<div style={{ textAlign: "center" }}>
					<svg viewBox="0 0 160 140" width="160" height="140">
						<rect
							x="10"
							y="10"
							width="140"
							height="120"
							fill="none"
							stroke="#a78bfa"
							strokeWidth="2"
							rx="4"
						/>
						<text x="30" y="70" fontSize="16" fill="#a78bfa" fontWeight="bold">
							window
						</text>
					</svg>
					<p style={{ color: "#cbd5e1", marginTop: "12px" }}>Browser</p>
				</div>

				{/* Node.js */}
				<div style={{ textAlign: "center" }}>
					<svg viewBox="0 0 160 140" width="160" height="140">
						<rect
							x="10"
							y="10"
							width="140"
							height="120"
							fill="none"
							stroke="#10b981"
							strokeWidth="2"
							rx="4"
						/>
						<text x="35" y="70" fontSize="16" fill="#10b981" fontWeight="bold">
							global
						</text>
					</svg>
					<p style={{ color: "#cbd5e1", marginTop: "12px" }}>Node.js</p>
				</div>
			</div>
			<div style={{ position: "absolute", bottom: "40px", width: "100%" }}>
				<SceneCaption text="Different environments, always a global object." />
			</div>
		</AbsoluteFill>
	)
}

export const GlobalObjectComposition = () => {
	return (
		<AbsoluteFill style={{ backgroundColor: "#0f172a" }}>
			<Sequence from={0} durationInFrames={60}>
				<Scene1 />
			</Sequence>
			<Sequence from={60} durationInFrames={60}>
				<Scene2 />
			</Sequence>
			<Sequence from={120} durationInFrames={60}>
				<Scene3 />
			</Sequence>
			<Sequence from={180} durationInFrames={60}>
				<Scene4 />
			</Sequence>
			<Sequence from={240} durationInFrames={90}>
				<Scene5 />
			</Sequence>
			<Sequence from={330} durationInFrames={60}>
				<Scene6 />
			</Sequence>
		</AbsoluteFill>
	)
}
