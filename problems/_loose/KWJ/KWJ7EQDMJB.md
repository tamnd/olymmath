---
tag: KWJ7EQDMJB
kind: problem
type: answer
answer: 2^{n-2}+2^{[\frac{n}{2}]-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, a finite sequence of positive integers $a_{1}, a_{2}, \cdots, a_{m}$ is called an "$n$-even sequence":

if $n=a_{1}+a_{2}+\cdots+a_{m}$, and there are an even number of integer pairs $(i, j)$ such that $1 \leqslant i \leqslant m$ and $i \leqslant j$ and $ia_{j}$. Find the number of $n$-even sequences. For example, there are six 4-even sequences: $4 ; 1,3 ; 2,2 ; 1,1,2 ; 2,1,1 ; 1,1,1,1$.
