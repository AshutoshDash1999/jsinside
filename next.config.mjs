import createMDX from "@next/mdx"

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
}

// Plugin functions are not serializable for Turbopack's MDX loader; keep options
// plain. Use explicit `id`s on headings in MDX or a future mdx-rs pipeline for slugs.
const withMDX = createMDX()

export default withMDX(nextConfig)
