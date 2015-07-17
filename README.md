# codegrid-markdown
CodeGrid-specified markdown processor.

の、予定地

- - -

## 方針
> 正規表現で全文さらってどうにかこうにかはしない、絶対にだ

というわけで。
```
Markdownと思わしき文字列を、
  -> MarkedでパースしてHTML文字列にして、
     -> jsdomに食わせてHTMLドキュメントにして、
        -> html-pipelineに通してフィルタでHTMLドキュメントを改変して、(ここで拡張記法に対応)
           -> innerHTMLをHTML文字列として使う。
```

## TODO
- [ ] markedに加えて、独自記法として拡張すべき記法がどれだけあるかを洗い出す
- [ ] いまのサンプル記法で良さそうか聞いてみる
