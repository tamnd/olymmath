---
tag: FX4BQ4Y3W6
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $n \in \mathbf{N}^{+}, A_{1}, A_{2}, \cdots, A_{2 n+1}$ are subsets of some set $B$. Suppose:
(1) $\left|A_{i}\right|=2 n(i=1,2, \cdots, 2 n+1)$;
(2) $\left|A_{i} \cap A_{j}\right|=1(1 \leqslant i<j \leqslant 2 n+1)$;
(3) Each element in $B$ belongs to at least two of the $A_i$'s.

For which $n$ can the elements of $B$ be labeled with 0 or 1 such that each $A_{i}$ has exactly $n$ elements labeled 0?
