---
tag: XGPH7ANH5S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244334
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be a finite set with $n{}$ $(n>1)$ elements, $M{}$ the set of all subsets of $S{}$ and a function $f:M\rightarrow\mathbb{R}$, that verifies the relation $f(A\cap B)=\min\{f(A),f(B)\}, \forall A,B\in M$. Show that $$\sum_{A\in M} (-1)^{n-|A|}\cdot f(A)=f(S)-\max\{f(A)|A\in M, A\neq S\},$$ where$|A|$ is the number of elements of subset $A{}$.
