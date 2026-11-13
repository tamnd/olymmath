---
tag: RWEXP4BYMC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n}(n \geqslant 2)$ be real numbers satisfying $0 \leqslant a_{i} \leqslant \frac{\pi}{2}$. Prove:
$$
\left(\frac{1}{n} \sum_{i=1}^{n} \frac{1}{1+\sin a_{i}}\right)\left(1+\prod_{i=1}^{n} \sin ^{\frac{1}{n}} a_{i}\right) \leqslant 1 .
$$
