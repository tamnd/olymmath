---
tag: QVG0YX8ZGB
kind: problem
type: answer
answer: "145"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
For any positive integer $n$, define $f(n)$ as the sum of the squares of the digits of $n$ (in base ten). For example, $f(2012) = 2^2 + 0^2 + 1^2 + 2^2 = 9$. Find the greatest integer $n$ such that there exists a positive integer $d$ with $f(\underbrace{f(\cdots f(n)\cdots)}_{d \text{ times}}) = n$.
