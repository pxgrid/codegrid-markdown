# codegrid-markdown
CodeGrid-specified markdown processor.

の、予定地

## TODOs
- [ ] こんな感じでいいか確認
- [ ] READMEの精査
- [ ] テストかく
- [ ] npm publishするならそれ用にいろいろ

- - -

## まず試すなら
```sh
npm i && npm run example
```

## 方針
注釈やコラムなど、CodeGrid独自記法をMarkdownで書けるようにする。

`marked`の`Lexar`まで拡張すれば、Markdown自体に文法を追加することもできるが、それはしない。(本体コードに手を入れればできそうではあるけども・・)

あくまで、Markdownの既存記法を拡張して実現したい。

よって、以下のように`code`ブロックを利用して拡張する。

```
"```cg:note
# たいとる
本文ほげほげ

[リンク](#foo)も書けるよ。
```"
```
(最初と最後の`"`はパースされないように付けただけで本当は不要)

最終的なアウトプットは、現状のマークアップから少し変更になるが、Markdownらしく書ける。

ちなみにこのサンプルは以下のようになる。

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
