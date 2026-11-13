---
tag: 3GH9ZQRSF0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=100895
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(Chebyshev's Inequality) Let there be two ordered sequences
$$
a_{1} \leqslant a_{2} \leqslant \cdots \leqslant a_{n} \text { and } b_{1} \leqslant b_{2} \leqslant \cdots \leqslant b_{n},
$$

then $\frac{1}{n} \sum_{i=1}^{n} a_{i} b_{n+1-i} \leqslant\left(\frac{1}{n} \sum_{i=1}^{n} a_{i}\right)\left(\frac{1}{n} \sum_{i=1}^{n} b_{i}\right) \leqslant \frac{1}{n} \sum_{i=1}^{n} a_{i} b_{i}$.
