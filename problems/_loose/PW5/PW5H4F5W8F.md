---
tag: PW5H4F5W8F
kind: problem
type: answer
answer: ⌊2n/3⌋ + 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=20
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be an integer $\ge 2$. Let $S$ be a set of triples of nonnegative integers $(a, b, c)$ such that $a + b + c = n$ and if $(a, b, c)$ and $(a', b', c')$ are distinct triples in $S$, then $a \ne a'$, $b \ne b'$ and $c \ne c'$. Find the maximum value of $|S|$.
