---
tag: 66HRGMYAGP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161691
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a sequence of real numbers $\left\{a_{n}\right\}_{n \geqslant 0}$, it holds that

$$
a_{n+1} + a_{n-1} = \left|a_{n}\right| \text{for all } n \geqslant 1.
$$

Prove that this sequence is periodic.
