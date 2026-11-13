---
tag: 1GC2PAMB6X
kind: problem
type: answer
answer: f(x) = g(x)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0000.parquet#row=49
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
已知多項式函數 $f, g$ 為實數映至實數。試求出所有的多項式函數對 $(f(x), g(x))$ 使得: 對任意實數 $x$,
$$
f(f(f(f(x)))) = g(g(g(g(x))))
$$
成立。
