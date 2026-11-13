---
tag: TB2FRWWDB4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
一正整數是回文數若且唯若它由左而右讀或由右而左讀是一樣的, 例如 $1221$ 或 $74847$ 都是回文數。一 $n$ 位數正整數 $k$ 以十進位寫成 $\overline{a_{n-1}a_{n-2}\cdots a_0}$。證明若 $k$ 是回文數, 則 $k^2$ 是回文數若且唯若 $a_0^2 + a_1^2 + \cdots + a_{n-1}^2 < 10$。
