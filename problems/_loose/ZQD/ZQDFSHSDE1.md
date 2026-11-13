---
tag: ZQDFSHSDE1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104520
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\left\{a_{i}\right\}$ and $\left\{b_{j}\right\}$ be sequences of real numbers. Prove:
$$
\sum_{m, n=1}^{2000} \frac{a_{m} b_{n}}{(\sqrt{m}+\sqrt{n})^{2}} \leqslant 2\left(\sum_{m=1}^{2000} a_{m}^{2}\right)^{\frac{1}{2}}\left(\sum_{n=1}^{2000} b_{n}^{2}\right)^{\frac{1}{2}} .
$$
