# codegrid-markdown

[CodeGrid](https://www.codegrid.net/)の記事で使われているMarkdown拡張記法を含んだ、[markded](https://marked.js.org/)ベースのMarkdownライブラリーです。

## 使い方

### パッケージのインストール

```sh
npm i codegrid-markdown
```

### Node.jsスクリプトでの実行

```javascript
import fs from 'node:fs';
import CodeGridMarkdown from 'codegrid-markdown';

const CGMDRenderer = new CodeGridMarkdown({
  // options for marked
});

const str = fs.readFileSync(import.meta.dirname + '/cg.md', 'utf-8');
const htmlStr = CGMDRenderer.render(str);
```

### CLIでの実行

```sh
cgmd ./path/to/your.md

# or
cgmd ./path/to/your.md -o ./path/to/your.html

# can also
cgmd '# foo'
```

## CGMD記法

以下の2パターンの拡張があります。

- CodeGridで使うコラムや注釈を実現するCGMD拡張ブロック
- Markdownのコードブロックにタイトルを付与する拡張

CGMD拡張ブロックは、互いにネストできません。

### note

本文を`.Note`で包み、内部の見出しをタイトルとして表示する注釈ボックスを作成します。

```
[note]
#### 注釈タイトル

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

### column

`.Column`で囲んでコラム風の補足ブロックに仕立てます。

```
[column]
#### コラムタイトル

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

### demo

`.Demo`コンテナを生成し、インラインフレームでのデモ表示を行います。ソースリンクの設置や遅延iframeにも対応します。

```
[demo]
# DEMOタイトル

<iframe src="http://example.com/demo.html"></iframe>
[/demo]
```

↓

```html
<section class="CG2-livecode">
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
    <iframe src="http://example.com/demo.html"></iframe>
  </div>
</section>
```

クリックで再生モードにしたい場合。

```
[demo]
# DEMOタイトル

<iframe data-src="http://example.com/demo.html" data-deferred="data-deferred"></iframe>
[/demo]
```

ソースコードへのリンクが欲しい場合。

```
[demo]
# DEMOタイトル
[ソースコード](http://example.com)

<iframe src="http://example.com/demo.html"></iframe>
[/demo]
```

### imgbox

`.ImgBox`の`<figure>`に変換し、タイトル、画像とキャプションをひとまとまりに表示します。

```
[imgbox]
#### 画像タイトル
画像の説明

![画像alt](http://example.com/image.png)
[/imgbox]
```

↓

```html
<div class="ImgBox">
  <h1 id="-">画像title</h1>
  <p>画像の説明</p>
  <p><img src="http://example.com/image.png" alt="画像alt"></p>
</div>
```

### tree

Markdownのリストを`<details>`付きのインタラクティブなファイルツリーに組み替えます。

```
[tree]
#### ファイルツリー
- src/
  - styles/
    - base.css
  - **components/**
    - **a-lot-of-files/**
[/tree]
```

```html
<div class="Free">
  <h4>ファイルツリー</h4>
  <ul>
    <li class="directory">
      <details>
        <summary>src/</summary>
        <ul>
          <li class="directory">
            <details>
              <summary>styles/</summary>
              <ul>
                <li class="file" data-file-type="css">base.css</li>
              </ul>
            </details>
          </li>
        </ul>
          <li class="directory">
            <details>
              <summary><strong>components/</strong></summary>
              <ul>
                <li class="directory">
                  <details>
                    <summary><strong>a-lot-of-files/</strong></summary>
                    <ul>
                      <li data-file-type class="file">...</li>
                    </ul>
                  </details>
                </li>
              </ul>
            </details>
          </li>
      </details>
    </li>
  </ul>
</div>
```

### code（タイトルつき）

Markdownのコードブロックにタイトルを付与する拡張です。

<pre>
```html#素敵なdiv
&lt;div&gt;&lt;/div&gt;
```
</pre>

GFMのコードブロックで、Syntaxに続けて`#コードのタイトル`を指定すると、以下が出力されます。

```html
<section class="CG2-livecode">
  <header class="CG2-livecode__header">
    <div class="CG2-livecode__label">素敵なdiv</div>
  </header>
  <div class="CG2-livecode__body">
    <pre><code class="lang-html">
      &lt;div&gt;&lt;/div&gt;
    </code></pre>
  </div>
</section>
```

コードのタイトル指定がない場合、通常のMarkdownのコードブロックとして処理されます。


## コードの修正・機能追加

メンテナンスモードに入っていますが、バグ修正や軽微な機能追加を行いたい場合は以下を参考にしてください。

### ランタイムの全体像

`lib/index.js`がトークナイザ・レンダラ・トランスフォーマを束ねてMarkdownをHTMLに変換します。新しい機能はここから呼び出される既存の拡張点を利用してください。処理の流れを追うには`lib/tokenizer/`→`lib/renderer/`→`lib/transformer/`の順に読むと把握しやすいです。

### 拡張記法

cgmdのレンダラは`lib/renderer/cgmd/`に追加し、`lib/renderer/cgmd.js`に登録します。DOMレベルの整形は`lib/transformer/`に置きます。小さな単位のレンダラを作り、必要に応じて`lib/renderer/md/`の既存実装を参考にしてください。

### CLIとサンプル

`bin/cgmd.js`が`cgmd`コマンドを提供します。ローカルでHTML出力を試すには`example/main.js`を使うか`npm run example`を実行して挙動を確認できます。CLIの引数追加や既定値の変更は`bin/cgmd.js`を編集してください。

### テスト

テストは`test/`以下に配置し、Node組み込みテストで実行します。全体の実行は`npm test`、反復実行は`npm run test:watch`を使います。レンダラ関連は`test/cgmd/renderer`、トークナイザは`test/cgmd/tokenizer`、トランスフォーマは`test/cgmd/transformer`を参照・追加します。

### 開発の流れ

- 依存を整える：`npm ci`
- 実装を加える：拡張は`lib/renderer/cgmd/`、DOM整形は`lib/transformer/`
- 動作確認：サンプルの`npm run example`または最小入力での単体実行
- テスト：失敗→修正→`npm run test:watch`で反復
- ドキュメント：新しい記法やオプションは`README.md`に追記

## LICENSE

[MIT License](./LICENSE)
