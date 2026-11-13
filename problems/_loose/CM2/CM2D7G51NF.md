---
tag: CM2D7G51NF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=100
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
For every positive integer $n$, let $f(n)$ be the number of all positive integers with exactly $2n$ digits, each having exactly $n$ of the digits equal to $1$ and the other $n$ digits equal to $2$. Let $g(n)$ be the number of all positive integers with exactly $n$ digits, each of its digits can only be $1$, $2$, $3$ or $4$ and the number of $1$'s equals the number of $2$'s. Prove that $f(n) = g(n)$.
