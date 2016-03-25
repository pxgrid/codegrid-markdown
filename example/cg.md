## はじめに

グリッド・カラムレイアウトといえば、以前紹介したFlexible Box（[そこが知りたい、Flexible Box](https://app.codegrid.net/entry/flexiblebox-1)）や`display:table;`を利用したマルチカラムレイアウト（[第1回 display: tableの活用 1](https://app.codegrid.net/entry/css-table-1)）などがあります。また、CodeGridではまだ紹介していませんが、[CSS Multi-column Layout Module](https://www.w3.org/TR/css3-multicol/#columns)もマルチカラムレイアウトをする上で重要です。

[cg:note]
# *注：Flexible Boxやマルチカラムレイアウト
CodeGridでは以下の記事で紹介しました。
- 「[そこが知りたい、Flexible Box](https://app.codegrid.net/series/2015-css-flexiblebox)」シリーズ
- 「[第1回 display: tableの活用 1](https://app.codegrid.net/entry/css-table-1)」
[/cg]


## 何ができるのか

Grid Layout Moduleでは、CSS上でレイアウト情報を定義することができます。`display: grid;`が指定された親要素にグリッドレイアウト情報を定義し、その子要素では、そのグリッドのどこに配置されるかを定義します。table要素を利用したテーブルレイアウトと似たように思えますが、table要素がHTML側でレイアウト構造を指定することに対し、Grid Layout ModuleではCSS側で、どのようなレイアウト構造にするかを指定します。

[cg:imgbox]
# ゲーム画面のレイアウト
![](https://s3-ap-northeast-1.amazonaws.com/codegrid/2016-display-grid/img/img01.png)
[/cg]

広い画面と狭い画面でレイアウトを変更しています。これをGrid Layout Moduleを使い、実現します。

まずはHTML部分です。HTMLの構造は非常に単純です。

[cg:code:html]
# display:gridのHTMLの例
<div class="grid">
  <div class="title">Title</div>
  <div class="status">Status</div>
  <div class="memberList">Member List</div>
  <div class="gameWindow">Game Window</div>
  <div class="chatWindow">Chat Window</div>
</div>
[/cg]

次にCSS部分です。`display: grid;`などを使用して、レイアウト情報を指定します。画面幅が狭くなった時には、メディアクエリでレイアウトを再定義しています。

[cg:code:css]
/* landscape */
.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
}
.title {
  grid-area: 1 / 1;
}
.status {
  grid-area: 3 / 1;
}
.memberList {
  grid-area: 2 / 1;
  align-self: start;
}
.gameWindow {
  grid-area: 1 / 2 / span 2 / auto;
  height: 250px;
}
.chatWindow {
  grid-area: 3 / 2;
}
[/cg]

たったこれだけで、HTMLの構造からは想像しづらいレイアウトを実現することができます。このデモを新しいウィンドウで開き、ウィンドウサイズを変化させてみると、レイアウトが変更されることを確認できるはずです。

[cg:demo]
# display: gridを利用したレイアウト
<iframe src="https://s3-ap-northeast-1.amazonaws.com/codegrid/2016-display-grid/demo/1/index.html" data-trigger></iframe>
[/cg]

[cg:column]
# コラム：古いシンタックスと最新のシンタックス

冒頭でも述べましたが、Grid Layout ModuleはIE10以降やEdgeで使用することができました。ですが、2011年頃の仕様（[Grid Layout | W3C Working Draft 7 April 2011][2]）を元にしています。そのため、先行実装しているChromeやFirefoxが元にしている2015年版の仕様との差が生まれています。本記事では、2015年版の最新の仕様について解説していくため、IEが対応している古い仕様については解説しません。また、最新の仕様の中でもChromeが対応していないプロパティや値に関しては解説していません。

もしIE10以降やEdgeにも対応したい場合は、Autoprefixerを併用することをおすすめします。この記事の執筆中にAutoprefixerのバージョンが上がり（[6.3 “Pro rege et lege”](https://github.com/postcss/autoprefixer/releases/tag/6.3.0)）、最新の仕様に沿った記述をすれば、IE用の記述にも対応ができます。ですが、すべてのGrid Layout Moduleに関するプロパティが古い仕様に対応しているわけではないので注意が必要です。

```css
.nested-code-block {
  in: the-cg-colum;
}
```
[/cg]


## Grid Layout Moduleに登場する用語

Grid Layout Moduleの理解を深めるには、そこに登場する用語を知っておく必要があります。ここで紹介する用語は以下のとおりです。

- グリッドコンテナ
- グリッドアイテム
- グリッドライン
- グリッドトラック
- グリッドセル
- グリッドエリア

まずは、Grid Layout Moduleに登場する用語の中で最も大事な、グリッドコンテナとグリッドアイテムについて解説します。

グリッドコンテナに関連するプロパティは以下の通りです。

プロパティ | 意味
--- | ---
`grid` | `grid-template`、`grid-auto-flow`、`grid-auto-rows`、`grid-auto-columns`を指定できるショートハンドプロパティ
`grid-template` | `grid-template-columns`、`grid-template-rows`、`grid-template-areas`を指定できるショートハンドプロパティ
`grid-template-rows` | 行のグリッドトラックそれぞれのサイズを指定する
`grid-template-columns` | 列のグリッドトラックそれぞれのサイズを指定する
`grid-template-areas` | 名前のついたグリッドエリアを指定する
`grid-auto-flow` | 明示的に配置されていないグリッドアイテムの配置方法を指定する
`grid-auto-rows` | 自動生成される行のグリッドトラックそれぞれのサイズを指定する
`grid-auto-columns` | 自動生成される列のグリッドトラックそれぞれのサイズを指定する
`grid-gap` | `grid-row-gap`、`grid-column-gap`を指定できるショートハンドプロパティ
`grid-row-gap` | 行と行の間の余白を指定する
`grid-column-gap` | 列と列の間の余白を指定する
`justify-items` | グリッドアイテムの横方向の整列を指定する
`align-items` | グリッドアイテムの縦方向の整列を指定する
`justify-content` | グリッドトラックの横方向の整列を指定する
`align-content` | グリッドトラックの縦方向の整列を指定する

これらのプロパティを駆使して、レイアウト情報を指定します。`justify-content`や`align-content`などは、Flexible Boxで解説したものと同じです。

## まとめ
今回はひとまず基本となる概念、グリッドコンテナとグリッドアイテムについて解説しました。次回はさらにグリッドを基本とするレイアウトに必要な概念と、その実装について解説を進めていきます。じっくりお付き合いください。
