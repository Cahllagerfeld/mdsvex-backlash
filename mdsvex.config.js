import { defineMDSveXConfig as defineConfig, escapeSvelte } from "mdsvex";
import shiki from "shiki";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  highlight: {
    highlighter: async (code, lang) => {
      const highlighter = await shiki.getHighlighter({
        langs: ["bash"],
        theme: "one-dark-pro",
      });
      const html = highlighter.codeToHtml(code, { lang: lang });
      return escapeSvelte(html);
      // return `{@html \`${escapeSvelte(html)}\` }`;
    },
  },

  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
