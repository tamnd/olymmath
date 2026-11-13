---
tag: FQXHTGAR1C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140972
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n \geqslant 2$. Prove: For any positive real numbers $a_{1}, a_{2}, \cdots, a_{n}$, we have
$$
\sum_{i=1}^{n}\left(\max _{1 \leqslant j \leqslant i} a_{j}\right)\left(\min _{i \leqslant j \leqslant n} a_{j}\right) \leqslant \frac{n}{2 \sqrt{n-1}} \sum_{i=1}^{n} a_{i}^{2} .
$$
