---
tag: V198EKMWV3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=128880
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{n} ; b_{1}, b_{2}, \cdots, b_{n}$ be positive real numbers, prove that:
$$
\sum_{k=1}^{n}\left(a_{k}+b_{k}\right) \cdot \sum_{k=1}^{n} \frac{a_{k} b_{k}}{a_{k}+b_{k}} \leqslant\left(\sum_{k=1}^{n} a_{k}\right)\left(\sum_{k=1}^{n} b_{k}\right) \text {, }
$$

with equality if and only if $\frac{a_{k}}{b_{k}}$ is a constant.
