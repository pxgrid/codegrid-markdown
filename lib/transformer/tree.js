/**
 * div.Treeを整形する
 *
 * @param {HTMLDocument} $
 *   cheerio
 */
export default function ($) {
  $(".Tree").each(function () {
    const $tree = $(this);
    $tree.find("li").each(function (idx, el) {
      const $li = $(el);
      const $ul = $li.find("> ul");
      const $label = $li.contents().not("ul");
      const labelText = $label.text().trim();

      // ディレクトリを示す場合は末尾に/がある
      const isDirectory = labelText.endsWith("/");
      const hasChildren = $ul.length > 0;

      // 中身のあるディレクトリの場合は、details/summaryを使う
      // - details要素でulを囲む
      // - summary要素には、li内のul以外の要素をラベルとして入れる
      if (isDirectory && hasChildren) {
        const $details = $("<details>");
        const $summary = $("<summary>");

        $details.append($ul);
        $details.attr("open", "true");
        $details.prepend($summary);
        $summary.append($label);

        $li.prepend($details);
        $li.addClass("directory");
        return;
      }

      // ディレクトリを示すが、中身がない場合は、ファイルが大量にあることを
      // 省略していることを意味するため、中身は ... とする
      if (isDirectory && !hasChildren) {
        const $details = $("<details>");
        const $summary = $("<summary>");
        const $emptyContent = $('<ul><li class="file">...</li></ul>');
        $details.append($emptyContent);
        $details.prepend($summary);
        $summary.append($label);

        $li.prepend($details);
        $li.addClass("directory");
        return;
      }

      // ファイルを示す場合は、拡張子をdata属性に持たせ、CSS側で利用する
      const fileExtension = labelText.split(".").pop();
      $li.attr("data-file-type", fileExtension);
      $li.addClass("file");
    });
  });
}
