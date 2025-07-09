import adapter from '@sveltejs/adapter-auto';
import { mdsvex } from 'mdsvex';
import remarkGfm from 'remark-gfm';
import preprocess from 'svelte-preprocess';

const config = {
  extensions: ['.svelte', '.md'],

  preprocess: [
    preprocess(),
    mdsvex({
      extensions: ['.md'],
      remarkPlugins: [remarkGfm]   // pour le markdown GitHub-like
    })
  ],

  kit: { adapter: adapter() }
};

export default config;
