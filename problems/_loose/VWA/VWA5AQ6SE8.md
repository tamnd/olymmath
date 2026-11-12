---
tag: VWA5AQ6SE8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=54468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given some triple of numbers. With any two of them, it is allowed to perform the following: if these numbers are equal to $a$ and $b$, then they can be replaced by $\frac{a+b}{\sqrt{2}}$ and $\frac{a-b}{\sqrt{2}}$. Is it possible to obtain the triple $(1, \sqrt{2}, 1+\sqrt{2})$ from the triple $\left(2, \sqrt{2}, \frac{1}{\sqrt{2}}\right)$ using such operations?
