import { defineMDSveXConfig as defineConfig, escapeSvelte } from "mdsvex";
import Prism from "prismjs";
import "prismjs/components/prism-bash.js";

const config = defineConfig({
  extensions: [".svelte.md", ".md", ".svx"],
  highlight: {
    highlighter: async (code, lang) => {
      const highlighted = escapeSvelte(
        Prism.highlight(code, Prism.languages["bash"], "bash")
      );
      return `<pre class="language-${lang}"><code class="language-${lang}">{@html ${JSON.stringify(
        highlighted
      )}}</code></pre>`;
    },
  },
  smartypants: {
    dashes: "oldschool",
  },

  remarkPlugins: [],
  rehypePlugins: [],
});

export default config;
