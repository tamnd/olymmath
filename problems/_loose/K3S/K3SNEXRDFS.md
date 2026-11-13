---
tag: K3SNEXRDFS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Color the elements of the set $M=\{1,2, \cdots, n\}$ using three colors, with each element colored in only one color. Let
$$
A=\{(x, y, z) \mid x, y, z \in M, x+y+z \equiv
$$
$0(\bmod n), x, y, z$ have the same color $\}$,
$$
B=\{(x, y, z) \mid x, y, z \in M, x+y+z \equiv
$$
$0(\bmod n), x, y, z$ have different colors $\}.$
Prove: $2|A| \geqslant|B|$.
