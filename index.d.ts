export default class CodeGridMarkdown {
  constructor(options?: CodeGridMarkdownOptions);
  render(md: string): string;
}

/**
 * Basically the same as MarkedOptions.
 * Except for `renderer`, `headerIds`, `langPrefix` options.
 *
 * See also https://github.com/DefinitelyTyped/DefinitelyTyped/blob/551eef84346f7141a6f52da938f484f445b5814a/types/marked/index.d.ts#L433
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
   * A function to highlight code blocks. The function takes three arguments: code, lang, and callback.
   */
  highlight?(
    code: string,
    lang: string,
    callback?: (error: any | undefined, code: string) => void,
  ): string;

  /**
   * Mangle autolinks (<email@domain.com>).
   */
  mangle?: boolean;

  /**
   * Conform to obscure parts of markdown.pl as much as possible. Don't fix any of the original markdown bugs or poor behavior.
   */
  pedantic?: boolean;

  /**
   * Sanitize the output. Ignore any HTML that has been input.
   */
  sanitize?: boolean;

  /**
   * Optionally sanitize found HTML with a sanitizer function.
   */
  sanitizer?(html: string): string;

  /**
   * Shows an HTML error message when rendering fails.
   */
  silent?: boolean;

  /**
   * Use smarter list behavior than the original markdown. May eventually be default with the old behavior moved into pedantic.
   */
  smartLists?: boolean;

  /**
   * Use "smart" typograhic punctuation for things like quotes and dashes.
   */
  smartypants?: boolean;

  /**
   * Enable GFM tables. This option requires the gfm option to be true.
   */
  tables?: boolean;

  /**
   * Generate closing slash for self-closing tags (<br/> instead of <br>)
   */
  xhtml?: boolean;
}
