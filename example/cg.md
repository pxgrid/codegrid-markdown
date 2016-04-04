## はじめに

グリッド・カラムレイアウトといえば、以前紹介したFlexible Box（[そこが知りたい、Flexible Box](https://app.codegrid.net/entry/flexiblebox-1)）や`display:table;`を利用したマルチカラムレイアウト（[第1回 display: tableの活用 1](https://app.codegrid.net/entry/css-table-1)）などがあります。また、CodeGridではまだ紹介していませんが、[CSS Multi-column Layout Module](https://www.w3.org/TR/css3-multicol/#columns)もマルチカラムレイアウトをする上で重要です。

[note]
# *注：Flexible Boxやマルチカラムレイアウト
CodeGridでは以下の記事で紹介しました。
- 「[そこが知りたい、Flexible Box](https://app.codegrid.net/series/2015-css-flexiblebox)」シリーズ
- 「[第1回 display: tableの活用 1](https://app.codegrid.net/entry/css-table-1)」
[/note]


## 何ができるのか

Grid Layout Moduleでは、CSS上でレイアウト情報を定義することができます。`display: grid;`が指定された親要素にグリッドレイアウト情報を定義し、その子要素では、そのグリッドのどこに配置されるかを定義します。table要素を利用したテーブルレイアウトと似たように思えますが、table要素がHTML側でレイアウト構造を指定することに対し、Grid Layout ModuleではCSS側で、どのようなレイアウト構造にするかを指定します。

[imgbox]
# ゲーム画面のレイアウト
![](https://s3-ap-northeast-1.amazonaws.com/codegrid/2016-display-grid/img/img01.png)
[/imgbox]

広い画面と狭い画面でレイアウトを変更しています。これをGrid Layout Moduleを使い、実現します。

まずはHTML部分です。HTMLの構造は非常に単純です。

```html#display:gridのHTMLの例
<div class="grid">
  <div class="title">Title</div>
  <div class="status">Status</div>
  <div class="memberList">Member List</div>
  <div class="gameWindow">Game Window</div>
  <div class="chatWindow">Chat Window</div>
</div>
```

次にCSS部分です。`display: grid;`などを使用して、レイアウト情報を指定します。画面幅が狭くなった時には、メディアクエリでレイアウトを再定義しています。

```css
/* landscape */
.grid {
  display: grid;
  grid-template-columns: auto 1fr;
  grid-template-rows: auto 1fr auto;
}
.chatWindow {
  grid-area: 3 / 2;
}
```

たったこれだけで、HTMLの構造からは想像しづらいレイアウトを実現することができます。このデモを新しいウィンドウで開き、ウィンドウサイズを変化させてみると、レイアウトが変更されることを確認できるはずです。

[demo]
# display: gridを利用したレイアウト
<iframe src="https://s3-ap-northeast-1.amazonaws.com/codegrid/2016-display-grid/demo/1/index.html" data-trigger></iframe>
[/demo]

[column]
# コラム：古いシンタックスと最新のシンタックス
もしIE10以降やEdgeにも対応したい場合は、Autoprefixerを併用することをおすすめします。この記事の執筆中にAutoprefixerのバージョンが上がり（[6.3 “Pro rege et lege”](https://github.com/postcss/autoprefixer/releases/tag/6.3.0)）、最新の仕様に沿った記述をすれば、IE用の記述にも対応ができます。ですが、すべてのGrid Layout Moduleに関するプロパティが古い仕様に対応しているわけではないので注意が必要です。

```css
.nested-code-block {
  in: the-cg-colum;
}
```
[/column]


## Grid Layout Moduleに登場する用語

Grid Layout Moduleの理解を深めるには、そこに登場する用語を知っておく必要があります。ここで紹介する用語は以下のとおりです。

- グリッドコンテナ
- グリッドエリア

まずは、Grid Layout Moduleに登場する用語の中で最も大事な、グリッドコンテナとグリッドアイテムについて解説します。

グリッドコンテナに関連するプロパティは以下の通りです。

プロパティ | 意味
--- | ---
`grid` | `grid-template`、`grid-auto-flow`、`grid-auto-rows`、`grid-auto-columns`を指定できるショートハンドプロパティ
`grid-template` | `grid-template-columns`、`grid-template-rows`、`grid-template-areas`を指定できるショートハンドプロパティ
`grid-template-rows` | 行のグリッドトラックそれぞれのサイズを指定する

これらのプロパティを駆使して、レイアウト情報を指定します。`justify-content`や`align-content`などは、Flexible Boxで解説したものと同じです。

## まとめ
今回はひとまず基本となる概念、グリッドコンテナとグリッドアイテムについて解説しました。次回はさらにグリッドを基本とするレイアウトに必要な概念と、その実装について解説を進めていきます。じっくりお付き合いください。

```
ここは何もついてないブロック
```

```html
<div>escape?</div>
```

[column]
# コラム
もしIE10

```css#コラムのコード
.nested-code-block {
  in: the-cg-colum;
}
```
[/column]
