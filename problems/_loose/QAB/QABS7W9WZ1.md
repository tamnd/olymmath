---
tag: QABS7W9WZ1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111643
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given positive integers $n, k$, let
$$
X=\{1,2, \cdots, n\} \text {. }
$$

Prove: $X$ can be partitioned into $k$ subsets with equal sums if and only if $k \mid \mathrm{C}_{n+1}^{2}$ and $n \geqslant 2 k-1$.
