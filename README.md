# codegrid-markdown
CodeGrid-specified markdown processor.

## 使い方
### Install

```sh
npm i codegrid-markdown
```

### Node
```javascript
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

# or
cgmd ./path/to/your.md -o ./path/to/your.html

# can also
cgmd '# foo'
```

## 記法

- cgmdとしての拡張記法
- mdの拡張記法

この2パターンの拡張があります。

cgmdパターンは、通常のMarkdownの中に混ぜて書くことができ、`[foo]通常のMarkdownテキスト[/foo]`の形式で記述します。

### cgmd#note

```
[note]
# 注釈タイトル

注釈本文
[/note]
```

↓

```html
<div class="Note">
  <h1 id="-">注釈タイトル</h1>
  <p>注釈本文</p>
</div>
```

### cgmd#column

```
[column]
# コラムタイトル

コラム本文
[/column]
```

↓

```html
<div class="Column">
  <h1 id="-">コラムタイトル</h1>
  <p>コラム本文</p>
</div>
```

### cgmd#demo

```
[demo]
# DEMOタイトル

<iframe src="http://example.com/demo.html" data-deferred></iframe>
[/demo]
```

↓

```html
<div class="CG2-livecode">
  <header class="CG2-livecode__header">
    <div class="CG2-livecode__label">
      DEMOタイトル
    </div>
    <div class="CG2-livecode__nav">
      <ul>
        <li>
          <a href="http://example.com/demo.html" target="_blank">
            <span class="CG2-icon-tool"></span> 新規タブで開く
          </a>
        </li>
      </ul>
    </div>
  </header>
  <div class="CG2-livecode__body">
    <iframe src="http://example.com/demo.html" data-deferred></iframe>
  </div>
</div>
```

### cgmd#imgbox

```
[imgbox]
# 画像タイトル

![画像alt](http://example.com/image.png)
[/imgbox]
```

↓

```html
<div class="ImgBox">
  <h1 id="-">画像title</h1>
  <p><img src="http://example.com/image.png" alt="画像alt"></p>
</div>
```

### cgmd#jade

```
[jade]
ul
  li jadeが
  li そのまま書けます

p またの名をpugとも言う
[/jade]
```

↓

```html
<ul>
  <li>jadeが</li>
  <li>そのまま書けます</li>
</ul>

<p>またの名をpugとも言う</p>
```

これらの記法は、互いにネストすることはできません。

次に、mdパターン。

### md#code

<pre>
```html#素敵なdiv
&lt;div&gt;&lt;/div&gt;
```
</pre>

GFMのコードブロックで、Syntaxに続けて`#コードのタイトル`を指定すると、以下が出力されます。

```html
<div class="CG2-livecode">
  <header class="CG2-livecode__header">
    <div class="CG2-livecode__label">素敵なdiv</div>
  </header>
  <div class="CG2-livecode__body">
    <pre><code class="lang-html">
      &lt;div&gt;&lt;/div&gt;
    </code></pre>
  </div>
</div>
```

コードのタイトル指定がない場合、通常のMarkdownのコードブロックとして処理されます。

## LICENSE
MIT
