---
tag: VWW4EZ26EF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=119442
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any natural number $n$ and real number $a$, prove:
$$
|a| \cdot|a-1| \cdot \cdots \cdot|a-n| \geqslant\langle a\rangle \cdot \frac{n!}{2^{n}},
$$

where $\langle a\rangle$ denotes the distance from $a$ to the nearest integer.
