import { createMDX } from 'fumadocs-mdx/next';
 
/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  serverExternalPackages: ['oxc-transform'],
};
 
const withMDX = createMDX();
 
export default withMDX(config);