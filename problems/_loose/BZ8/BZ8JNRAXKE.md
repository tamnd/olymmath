---
tag: BZ8JNRAXKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=103642
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Four. (50 points) Let $s(x)$ denote the sum of the decimal digits of the positive integer $x$. Define
$$
f_{k}(n)=\frac{s\left(k n^{2}\right)}{s\left(n^{3}\right)}\left(k, n \in \mathbf{Z}_{+}\right) \text {. }
$$

Prove: For any $k \in \mathbf{Z}_{+}$, there exist infinitely many $n \in \mathbf{Z}_{+}, n \geqslant 2$, such that
$$
f_{k}(n)<\min _{1 \leqslant i \leqslant n-1}\left\{f_{k}(i)\right\} .
$$
