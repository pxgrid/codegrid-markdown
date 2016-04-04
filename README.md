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
cgmd # foo
```

## 記法

- cgmdとしての拡張記法
- mdの拡張記法

この2パターンの拡張があります。

まずはcgmdパターン。

### cgmd#note
wip

### cgmd#column
wip

### cgmd#demo
wip

### cgmd#imgbox
wip

### cgmd#jade
wip


次に、mdパターン。

### md#code

GFMのコードブロックで、Syntaxを指定する部分を以下のようにできます。

<pre>
```html#素敵なdiv
<div></div>
```
</pre>

すると、以下が出力されます。

<pre>
```html
<div class="Code">
  <div class="Code__title">素敵なdiv</div>
  <div class="Code__body">
    &lt;div&gt;&lt;/div&gt;
  </div>
</div>
```
</pre>


## LICENSE
MIT
