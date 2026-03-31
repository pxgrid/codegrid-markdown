export default class CodeGridMarkdown {
  constructor(options?: CodeGridMarkdownOptions);
  render(md: string): string;
}

/**
 * Options for CodeGridMarkdown.
 *
 * Basically the same as MarkedOptions.
 * `renderer` and `headerIds` are used internally and cannot be overridden.
 *
 * See also https://marked.js.org/using_advanced#options
 */
export interface CodeGridMarkdownOptions {
  /**
   * A prefix URL for any relative link.
   */
  baseUrl?: string;

  /**
   * Enable GFM line breaks. This option requires the gfm option to be true.
   */
  breaks?: boolean;

  /**
   * Enable GitHub flavored markdown.
   */
  gfm?: boolean;

  /**
   * Set the prefix for header tag ids.
   */
  headerPrefix?: string;

  /**
   * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
   */
  pedantic?: boolean;

  /**
   * Shows an HTML error message when rendering fails.
   */
  silent?: boolean;

  /**
   * Use "smart" typographic punctuation for things like quotes and dashes.
   */
  smartypants?: boolean;

  /**
   * Generate closing slash for self-closing tags (<br/> instead of <br>)
   */
  xhtml?: boolean;
}
