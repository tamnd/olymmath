---
tag: C0S0HJAVVT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=186152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
## Prove:

For every natural number $n \geq 2$ and for any $n$ functions $f_{1}, f_{2}, \ldots, f_{n}$ defined on the interval $0 \leq x \leq 1$, there exist real numbers $a_{1}, a_{2}, \ldots, a_{n}$ with $0 \leq a_{i} \leq 1 (i=1, \ldots, n)$, such that:

$$
\left|a_{1} \cdot a_{2} \cdot \ldots \cdot a_{n}-\sum_{i=1}^{n} f_{i}\left(a_{i}\right)\right| \geq \frac{1}{2}-\frac{1}{2 n}
$$
