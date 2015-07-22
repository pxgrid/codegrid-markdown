# codegrid-markdown
CodeGrid-specified markdown processor.

の、予定地

## TODOs
- [x] こんな感じでいいか確認
- [ ] コードレビューしてもらう
- [ ] READMEの精査
- [ ] テストかく
- [ ] npm publishするならそれ用にいろいろ

- - -

## まず試すなら
```sh
npm i && npm run example
```

## なりたち
現状の原稿は、`md`で書いて`jade`で編集して・・とフォーマットが複数になっていて、それを一つにまとめたい。
既存のMarkdownで対応できない注釈やコラムなど、CodeGridの独自記法をMarkdownで書けるようにするためのMarkdown拡張ライブラリ。

## どう書くか
> `marked`の`Lexar`まで拡張すれば、Markdown自体に文法を追加することもできるが、それはしない。
> (本体コードに手を入れればできそうではあるけども・・)

あくまで、Markdownの既存記法を拡張して実現したい。
Markdownのパースを経ても独自記法をそのままに保つためには、`code`ブロックで囲うのが良さそうで、
よって、以下のように`code`ブロックを利用して拡張する。

<pre>
```cg:note
# たいとる
本文ほげほげ

[リンク](#foo)も書けるよ。
```
</pre>

最終的なアウトプットは、現状のマークアップから少し変更になるが、Markdownらしく書ける。

ちなみにこのサンプルは以下のようになります。

```html
<div class="Note">
  <h1>たいとる</h1>
  <p>本文ほげほげ<a href="#foo">リンク</a>も書けるよ。</p>
</div>
```


## 書式サンプル
### 基本
基本的に、[GFM](https://help.github.com/articles/github-flavored-markdown)が使えます。
それにくわえて、以下のCodeGrid用モジュールが使えます。

- Table
- Raw HTML
- etc..

### 注釈
```
"```cg:note
# タイトル
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら・・・
```"
```

### コラム
```
"```cg:column
# タイトル
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら・・・
```"
```

### 画像ボックス
```
"```cg:imgbox
# タイトル
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら・・・
![sample](http://i.giphy.com/Hc8PMCBjo9BXa.gif)
```"
```

### iframeデモ
```
"```cg:demo
# タイトル
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら・・・
<iframe data-trigger="data-trigger" src="" class="sizeM"></iframe>
```"
```

### jade
```
"```cg:jade
.Masaka
  .Konnna_koto_mo
  .Dekiru_nannte
```"
```

## 参考
- [CodeGridモジュール集](https://staging-codegrid.herokuapp.com/entry/jade-samples)
