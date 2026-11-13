---
tag: T940C3YPDJ
kind: problem
type: answer
answer: n = 1, 2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Mongolia/train/0001.parquet#row=111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: mn-mo
    source: hf-mathnet
    label: Mongolia Mongolian Mathematical Olympiad
---
For a positive integer $n$, let $a_n = \frac{(2n)!}{(n!)^3}$. Here $k! = 1 \times 2 \times 3 \times \cdots \times k$.

(1)
Prove $a_n > a_{n+1}$ for all $n \ge 3$.

(2)
Find all $n$ such that $a_n$ is a whole number.
