---
tag: MAGRTSP0R8
kind: problem
type: answer
answer: "2016"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114724
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest positive integer $n$ such that: if the set $A=\{1,2,3, \cdots, n\}$ is arbitrarily partitioned into 63 pairwise disjoint subsets (which are non-empty and whose union is the set $A) A_{1}, A_{2}, A_{3}, \cdots, A_{63}$, then there always exist two positive integers $x, y$ in the same subset $A_{i}(1 \leqslant i \leqslant 63)$ such that $x>y$ and $31 x \leqslant 32 y$.
