---
tag: YBQPSMD1FK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive rational number $q$, we say it is brilliant if for every positive rational number $x$ there exist an integer $n \geqslant 0$ and integers $a_{0}, \ldots, a_{n}$ such that

$$
x=q^{a_{0}} \cdot(q+1)^{a_{1}} \cdot \ldots \cdot(q+n)^{a_{n}}
$$

Determine all brilliant numbers.
