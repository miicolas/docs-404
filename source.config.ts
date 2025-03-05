import { defineDocs, defineConfig } from 'fumadocs-mdx/config';
import { remarkAdmonition } from 'fumadocs-core/mdx-plugins';
import { remarkTypeScriptToJavaScript } from 'fumadocs-docgen';


import { remarkInstall } from 'fumadocs-docgen';

export const { docs, meta } = defineDocs({
  dir: 'content/docs',
});

export default defineConfig({
  mdxOptions: {
    remarkPlugins: [remarkInstall, remarkAdmonition, remarkTypeScriptToJavaScript],
  },
});