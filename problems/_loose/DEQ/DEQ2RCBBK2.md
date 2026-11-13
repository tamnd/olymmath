---
tag: DEQ2RCBBK2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=122751
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $n$ distinct points $P_{1}, P_{2}, \cdots, P_{n}$ on the unit circle. Let $d_{i}=\left|P_{i} P_{1}\right| \cdot\left|P_{i} P_{2}\right| \cdots\left|P_{i} P_{i-1}\right| \cdot$ $\left|P_{i} P_{i+1}\right| \cdots\left|P_{i} P_{n}\right|$, prove: $\sum_{i=1}^{n} \frac{1}{d_{i}} \geqslant 1$.
