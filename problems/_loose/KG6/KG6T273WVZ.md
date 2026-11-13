---
tag: KG6T273WVZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=114707
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ distinct positive fractions: $\frac{a_{1}}{b_{1}}, \frac{a_{2}}{b_{2}}, \cdots, \frac{a_{n}}{b_{n}}$, and $a_{i}>0, b_{i}>0$, prove that $\frac{a_{1}+a_{2}+\cdots+a_{n}}{b_{1}+b_{2}+\cdots+b_{n}}$ lies between $\min \left\{\frac{a_{1}}{b_{1}}, \frac{a_{2}}{b_{2}}, \cdots, \frac{a_{n}}{b_{n}}\right\}=\frac{a_{i}}{b_{i}}, \max \left\{\frac{a_{1}}{b_{1}}, \frac{a_{2}}{b_{2}}, \cdots, \frac{a_{n}}{b_{n}}\right\}=\frac{a_{s}}{b_{s}}$ ($\frac{a_{i}}{b_{i}}$ represents the smallest fraction among the fractions, $\frac{a_{s}}{b_{s}}$ represents the largest fraction among the fractions).
