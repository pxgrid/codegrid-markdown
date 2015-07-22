# codegrid-markdown
CodeGrid-specified markdown processor.

の、予定地

- - -

## 試す
```sh
npm i && npm run example
```

## 方針

```
"```cg:note
# たいとる
本文ほげほげ

[リンク](#foo)も書けるよ。
```"
```
(`"`はパースされないように付けただけで本当は不要)

最終的なアウトプットは、現状のマークアップから少し変更になるが、Markdownらしく書けるように。

このサンプルが、

```html
<div class="Note">
  <h1>たいとる</h1>
  <p>本文ほげほげ<a href="#foo">リンク</a>も書けるよ。</p>
</div>
```

こうなる。


## 書式サンプル
### 基本
基本的に、[GFM](https://help.github.com/articles/github-flavored-markdown)が使えます。
それにくわえて、以下のCodeGrid用モジュールが使えます。

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


## 参考
- [CodeGridモジュール集](https://staging-codegrid.herokuapp.com/entry/jade-samples)
