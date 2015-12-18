# hoge
this is __test__ texts.

この`md`がきれいにパースできれば、それなりに動いてるのでは！

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

```javascript
var t = "some code goes here."
```

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

```
これはただの囲い
```

```cg:note
# たいとる

本文ほげほげ[リンク](#foo)も書けるよ。
```

```cg:column
# たいとる

本文ほげほげ

![alt](http://www.test.com/hoge.jpg)

```

```cg:imgbox
# たいとる

本文ほげほげ

![alt](http://www.test.com/hoge.jpg)
```

```cg:demo
# たいとる

iframeだけはタグをそのまま書くことになりそう。

<iframe src="http://demo/index.html" data-trigger class="SizeL"></iframe>
```

```cg:jade
.Note
  .Note-title たいとる
  .Note-body 本文ほげほげ
```

```cg:code:hbs
# Handlebarsのコードです
<div class="entry">
  <h1>{{title}}</h1>
  <div class="body">
    {{body}}
  </div>
</div>
```
