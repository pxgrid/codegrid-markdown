# codegrid-markdown
CodeGrid-specified markdown processor.

の、予定地

- - -

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
あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波
```"
```

### コラム
wip

### 画像ボックス
wip

### iframeデモ
wip

## 参考
- [CodeGridモジュール集](https://staging-codegrid.herokuapp.com/entry/jade-samples)
