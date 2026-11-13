---
tag: M49GC1XGCN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89763
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0000.parquet#row=252
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo
    source: hf-mathnet
    label: Croatia Mathematica competitions in Croatia
---
Let $m, n$, and $k$ be natural numbers and let $p_{1}, p_{2}, \ldots, p_{n}$ be the numbers $1,2, \ldots, n$ in some order. If for every $i \in\{1,2, \ldots, n\}$ it holds that

$$
k \mid\left(m+p_{i}-i\right)
$$

prove that at least one of the numbers $m$ and $n$ is a multiple of $k$.
