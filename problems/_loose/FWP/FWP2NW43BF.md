---
tag: FWP2NW43BF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118606
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=138
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-mo
    source: hf-mathnet
    label: China China Mathematical Olympiad
---
For a positive integer $n$ and an integer $i(0 \leqslant i \leqslant n)$, let $\mathrm{C}_{n}^{i} \equiv c(n, i)(\bmod 2)(c(n, i) \in\{0,1\})$.
Denote $f(n, q)=\sum_{i=0}^{n} c(n, i) q^{i}$.
Suppose $m 、 n 、 q \in \mathbf{Z}_{+}$, and $q+1$ is not a power of 2. Prove: If $f(m, q) \mid f(n, q)$, then for any positive integer $r$ we have
$$
f(m, r) \mid f(n, r) .
$$
