---
tag: SK2BQ9JRT1
kind: problem
type: answer
answer: f(x) ≡ 0; f(x) ≡ t; f(x) = (t+1)x − (t+2), for real t ≠ −1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
令 $\mathbb{R}$ 表示實數所成的集合。給定實數 $t \neq -1$。找出所有的函數 $f: \mathbb{R} \to \mathbb{R}$ 使得
$$
(t + 1)f(1 + xy) - f(x + y) = f(x + 1)f(y + 1) \text{ 成立。}
$$
