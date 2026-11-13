---
tag: FP36HXJ5MD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95470
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n$, define $f(n)=\min _{m \in N_{+}}\left|\sqrt{2}-\frac{m}{n}\right|$. Let $\left\{n_{i}\right\}_{i \geq 1}$ be an increasing sequence of positive integers, and $\lambda$ be a constant, satisfying $f\left(n_{i}\right)<\frac{\lambda}{n_{i}^{2}}(i=1,2, \ldots)$.
Prove that there exists a real number $q$ greater than 1, such that $n_{i} \geq q^{i-1}$ for all positive integers $i$.
