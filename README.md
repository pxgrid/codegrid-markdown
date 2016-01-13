# codegrid-markdown
CodeGrid-specified markdown processor.

## 使い方
### Install

```sh
# TODO:
# npm i codegrid-markdown
```

### Node
```
var CodeGridMarkdown = require('codegrid-markdown');

var CGMDRenderer = new CodeGridMarkdown({
  // options for marked
});

var str = fs.readFileSync(__dirname + '/cg.md', 'utf-8');
var htmlStr = CGMDRenderer.render(str);
```

### CLI
```sh
cgmd ./path/to/your.md
```


## サンプル

<pre>
```cg:note
# たいとる
本文ほげほげ

[リンク](#foo)も書けるよ。
```</pre>

↓

```html
<div class="Note">
  <h1>たいとる</h1>
  <p>本文ほげほげ<a href="#foo">リンク</a>も書けるよ。</p>
</div>
```


## 機能
### 基本
基本的に、[GFM](https://help.github.com/articles/github-flavored-markdown)が使えます。
それにくわえて、以下のCodeGrid用モジュールが使えます。

- Table
- Raw HTML
- etc..

### 注釈
<pre>
```cg:note
# タイトル
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら・・・
```</pre>

### コラム
<pre>
```cg:column
# タイトル
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら・・・
```</pre>

### 画像ボックス
<pre>
```cg:imgbox
# タイトル
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら・・・
![sample](http://i.giphy.com/Hc8PMCBjo9BXa.gif)
```</pre>

### iframeデモ
<pre>
```cg:demo
# タイトル
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら・・・
<iframe data-trigger="data-trigger" src="" class="sizeM"></iframe>
```</pre>

### jade
<pre>
```cg:jade
.Masaka
  .Konnna_koto_mo
  .Dekiru_nannte
```</pre>

### コードブロック

一行目が#で始まっていたら、それがタイトルになる。

> `cg:code:` のように中途半端な指定をすると、CodeGridMarkdownとして認識されないので注意

<pre>
```cg:code:html
# sample.html
<div>this is sample</div>
```</pre>

<pre>
```cg:code:html
<div>this is sample</div>
```</pre>

## LICENSE
MIT
