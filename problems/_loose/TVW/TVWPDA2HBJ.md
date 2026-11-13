---
tag: TVWPDA2HBJ
kind: problem
type: answer
answer: \begin{pmatrix}\hlinep&x&y&r&z\\\hline2&2&3&1&5&1\\\hline2&2&5&1&3&1\\\hline2&3&3&2&7&1\\
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165781
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's find all the $p, q, r$ (positive) prime numbers, and $x, y, z$ natural numbers, for which the following equality holds:

$$
p^{2 x}=q^{y} \cdot r^{z}+1
$$
