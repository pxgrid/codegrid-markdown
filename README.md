# codegrid-markdown
CodeGrid-specified markdown processor.

の、予定地

- - -

## 方針
> 正規表現で全文さらってどうにかこうにかはしない、絶対にだ

```
"```cg:note
# たいとる
本文ほげほげ

[リンク](#foo)も書けるよ。
```"
```
ってな感じでブロックごと逃がす方針。(`"`はパースされないように付けただけで本当は不要)

最終的なアウトプットは、現状のマークアップから少し変更になるが、Markdownらしく書けるようにする。


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
