---
tag: T4ABHQ9GQX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=133007
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 2$, let $a_{1}, a_{2}, \cdots, a_{n}$ be positive real numbers. Prove:
$$
\left(\frac{\sum_{j=1}^{n} \sqrt[j]{a_{1} a_{2} \cdots a_{j}}}{\sum_{j=1}^{n} a_{j}}\right)^{\frac{1}{n}}+\frac{\sqrt[n]{a_{1} a_{2} \cdots a_{n}}}{\sum_{j=1}^{n} \sqrt[j]{a_{1} a_{2} \cdots a_{j}}} \leqslant \frac{n+1}{n} .
$$
