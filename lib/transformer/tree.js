"use strict";

/**
 * div.FileTreeを整形する
 *
 * @param {HTMLDocument} $
 *   cheerio
 */
module.exports = function ($) {
  $(".FileTree").each(function () {
    var $tree = $(this);
    $tree.find("li").each(function (idx, el) {
      var $li = $(el);
      var $ul = $li.find("> ul");
      var $liTextNode = $li.contents().filter(function () {
        return this.nodeType === 3 || $(this).is("strong");
      });
      var liText = $li.text().trim();

      // ディレクトリを示す場合は末尾に/がある
      var isDirectory = /\/\s*$/.test(liText);

      if ($ul.length > 0) {
        var $details = $("<details>");
        var $summary = $("<summary>");

        // - details要素でulを囲む
        // - summaryにli直下の、テキストまたはstrongで囲まれたテキストを入れる
        $details.append($ul);
        $details.attr("open", "true");
        $details.prepend($summary);
        $summary.append($liTextNode);

        $li.prepend($details);
        $li.addClass("directory");
      } else {
        if (isDirectory) {
          // ディレクトリを示すが、中身がない場合は、ファイルが大量にあることを
          // 省略していることを意味するため、中身は ... とする
          var $details = $("<details>");
          var $summary = $("<summary>");
          var $emptyContent = $('<ul><li class="file">...</li></ul>');
          $details.append($emptyContent);
          $details.prepend($summary);
          $summary.append($liTextNode);

          $li.prepend($details);
          $li.addClass("directory");
        } else {
          // ファイルを示す場合は、拡張子をdata属性に持たせ、CSS側で利用する
          var fileExtension = liText.split(".").pop();
          $li.attr("data-file-type", fileExtension);
          $li.addClass("file");
        }
      }
    });
  });
};
