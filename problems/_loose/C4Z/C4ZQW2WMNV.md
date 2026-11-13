---
tag: C4ZQW2WMNV
kind: problem
type: answer
answer: n^{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=126445
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $\sum_{i=1}^{n} a_{i} \leqslant n, \sum_{j=1}^{n} b_{j} \leqslant n$. Find
$$
\sqrt{2} \sum_{i=1}^{n} \sum_{j=1}^{n} \sqrt{\frac{1}{a_{i}}+\frac{1}{b_{j}}}-\sum_{i=1}^{n} \sum_{j=1}^{n} \sqrt{\frac{a_{i}^{2}+b_{j}^{2}}{a_{i}^{2} b_{j}+a_{i} b_{j}^{2}}}
$$

the minimum value.
