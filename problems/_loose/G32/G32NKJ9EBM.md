---
tag: G32NKJ9EBM
kind: problem
type: answer
answer: (n)=2n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98889
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, find (and prove) the smallest positive integer $h(n)$: for any $n-$ partition $A_{1}, A_{2}, \cdots, A_{n}$ of the set $\{1$, $2, \cdots, h(n)\}$, there exist non-negative integers $a$, and integers $x, y$ satisfying $1 \leqslant x \leqslant y \leqslant$ $h(n)$, such that $a+x, a+y, a+x+y$ all belong to some $A_{i}$, where $1 \leqslant i \leqslant n$.
