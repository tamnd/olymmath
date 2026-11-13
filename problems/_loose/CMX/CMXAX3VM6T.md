---
tag: CMXAX3VM6T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a_{i}>0, b_{i}>0, a_{i} b_{i}=c_{i}^{2}+d_{i}^{2}(i=1,2, \cdots, n)$, then
$$
\left(\sum_{i=1}^{n} a_{i}\right)\left(\sum_{i=1}^{n} b_{i}\right) \geqslant\left(\sum_{i=1}^{n} c_{i}\right)^{2}+\left(\sum_{i=1}^{n} d_{i}\right)^{2}
$$

Equality holds if and only if $\frac{a_{i}}{a_{j}}=\frac{b_{i}}{b_{j}}=\frac{c_{i}}{c_{j}}=\frac{d_{i}}{d_{j}}(1 \leqslant i<j \leqslant n)$.
