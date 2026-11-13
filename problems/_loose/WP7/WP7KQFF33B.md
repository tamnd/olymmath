---
tag: WP7KQFF33B
kind: problem
type: answer
answer: '|a_n - b_n| < c'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(a_{n})_{n\ge 0}$ and $(b_{n})_{n\ge 0}$ be two sequences with arbitrary real values $a_0, a_1, b_0, b_1$. For $n\ge 1$, let $a_{n+1}, b_{n+1}$ be defined in this way:
$$a_{n+1}=\dfrac{b_{n-1}+b_{n}}{2}, b_{n+1}=\dfrac{a_{n-1}+a_{n}}{2}$$
Prove that for any constant $c>0$ there exists a positive integer $N$ s.t. for all $n>N$, $|a_{n}-b_{n}|<c$.
