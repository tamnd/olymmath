---
tag: 5YGBV95TG7
kind: problem
type: answer
answer: "3007"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265958
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each positive integer $m$ and $n$ define function $f(m, n)$ by $f(1, 1) = 1$, $f(m+ 1, n) = f(m, n) +m$ and $f(m, n + 1) = f(m, n) - n$. Find the sum of all the values of $p$ such that $f(p, q) = 2004$ for some $q$.
