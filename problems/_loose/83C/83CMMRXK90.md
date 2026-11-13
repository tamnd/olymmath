---
tag: 83CMMRXK90
kind: problem
type: answer
answer: a) (n+1)^k; b) 580
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0001.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 66th ROMANIAN MATHEMATICAL OLYMPIAD
---
Let $k \ge 1$, be a positive integer, let $p_1, p_2, \dots, p_k$ be distinct primes and denote $n = p_1p_2\dots p_k$. For a function $f : \{1, 2, \dots, n\} \to \{1, 2, \dots, n\}$, define $p(f) = f(1)f(2)\dots f(n)$.

a) Determine the number of functions $f$ such that $p(f)$ divides $n$.

b) For $n=6$, determine the number of functions $f$ such that $p(f)$ divides $36$.
