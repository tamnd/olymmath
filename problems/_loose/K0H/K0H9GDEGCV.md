---
tag: K0H9GDEGCV
kind: problem
type: answer
answer: 2^{27}-2^{11}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106046
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Polynomial $(1-z)^{b_{1}} \cdot\left(1-z^{2}\right)^{b_{2}} \cdot\left(1-z^{3}\right)^{b_{3}} \cdots \cdots \cdot\left(1-z^{32}\right)^{b_{12}}$, where $b_{i}$ are positive integers $(i=1,2, \cdots, 32)$, and this polynomial has the following remarkable property: when expanded, and the terms of $z$ with powers higher than 32 are deleted, exactly $1-2 z$ remains. Determine $b_{32}$ (the answer can be expressed as the difference of two powers of 2).
