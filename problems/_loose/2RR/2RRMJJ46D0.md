---
tag: 2RRMJJ46D0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98761
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
6 - 60. Let $N$ be the set of natural numbers, $k \in N$, if there is a function $f: N \rightarrow N$ that is strictly increasing, and for each $n \in N$, $f(f(n))=k n$.
Prove: For every $n \in N$, we have
$$
\frac{2 k}{k+1} n \leqslant f(n) \leqslant \frac{k+1}{2} n .
$$
