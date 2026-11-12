---
tag: F31XKMVHPG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42488
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=42625
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that for any positive numbers

$$
a_{1}, a_{2} \ldots a_{n}
$$

the following inequality holds:

$$
\frac{a_{1}}{a_{2}}+\frac{a_{2}}{a_{3}}+\ldots+\frac{a_{n}}{a_{1}} \geqslant n
$$
