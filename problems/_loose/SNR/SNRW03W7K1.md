---
tag: SNRW03W7K1
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=29862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a cube $A B C D A_{1} B_{1} C_{1} D_{1}$. Points $M$ and $N$ are taken on segments $A A_{1}$ and $B C_{1}$ such that the line $M N$ intersects the line $B_{1} D$. Find

$$
\frac{\left|B C_{1}\right|}{|B N|}-\frac{|A M|}{\left|A A_{1}\right|}
$$
