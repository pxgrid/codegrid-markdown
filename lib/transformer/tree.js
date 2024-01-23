"use strict";

/**
 * div.Treeを整形する
 *
 * @param {HTMLDocument} $
 *   cheerio
 */
module.exports = function ($) {
  $(".Tree").each(function () {
    var $tree = $(this);
    $tree.find("li").each(function (idx, el) {
      var $li = $(el);
      var $ul = $li.find("> ul");
      var $label = $li.contents().not("ul");
      var labelText = $label.text().trim();

      // ディレクトリを示す場合は末尾に/がある
      var isDirectory = labelText.endsWith("/");
      var hasChildren = $ul.length > 0;

      // 中身のあるディレクトリの場合は、details/summaryを使う
      // - details要素でulを囲む
      // - summary要素には、li内のul以外の要素をラベルとして入れる
      if (isDirectory && hasChildren) {
        var $details = $("<details>");
        var $summary = $("<summary>");

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
        var $details = $("<details>");
        var $summary = $("<summary>");
        var $emptyContent = $('<ul><li class="file">...</li></ul>');
        $details.append($emptyContent);
        $details.prepend($summary);
        $summary.append($label);

        $li.prepend($details);
        $li.addClass("directory");
        return;
      }

      // ファイルを示す場合は、拡張子をdata属性に持たせ、CSS側で利用する
      var fileExtension = labelText.split(".").pop();
      $li.attr("data-file-type", fileExtension);
      $li.addClass("file");
    });
  });
};
