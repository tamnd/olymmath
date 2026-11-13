---
tag: TZ8T2BAXD8
kind: problem
type: answer
answer: n = 1, 2, 4k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227606
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence of polynomials $(a_n)$ is defined by $a_0=0$, $ a_1=x+2$ and $a_n=a_{n-1}+3a_{n-1}a_{n-2} +a_{n-2}$ for $n>1$.
(a) Show for all positive integers $k,m$: if $k$ divides $m$ then $a_k$ divides $a_m$.
(b) Find all positive integers $n$ such that the sum of the roots of polynomial $a_n$ is an integer.
