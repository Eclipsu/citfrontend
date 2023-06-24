export function convertMarkdownToPlainText(markdown) {
  // Remove Markdown headings
  markdown = markdown.replace(/#+\s+/g, "");

  // Remove Markdown unordered lists
  markdown = markdown.replace(/(^|\n)-\s+/g, "");

  // Remove other Markdown formatting
  markdown = markdown.replace(/(\*\*|__)(.*?)\1/g, "$2");
  markdown = markdown.replace(/(\*|_)(.*?)\1/g, "$2");
  markdown = markdown.replace(/(`{1,3})(.*?)\1/g, "$2");
  markdown = markdown.replace(/!\[(.*?)\]\((.*?)\)/g, "$1");

  return markdown.trim();
}
