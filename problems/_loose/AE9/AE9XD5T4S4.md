---
tag: AE9XD5T4S4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=44272
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove: for the lines $x, y, z$, passing through the vertices $A, B, C$ of triangle $ABC$, to intersect at one point or be parallel to each other, it is necessary and sufficient that the following equality holds:

$$
(b c x)(c a y)(a b z)=-1, \text{ where } a=(B C), b=(C A), c=(A B).
$$

(This is an analog of Menelaus' theorem; the lines $x, y, z$ should be considered distinct from the lines $a, b, c$.)
