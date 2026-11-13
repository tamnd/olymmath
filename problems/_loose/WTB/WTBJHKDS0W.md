---
tag: WTBJHKDS0W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227462
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The vertices of two regular octagons are numbered from $1$ to $8$, in some order, which may vary between both octagons (each octagon must have all numbers from $1$ to $8$). After this, one octagon is placed on top of the other so that every vertex from one octagon touches a vertex from the other. Then, the numbers of the vertices which are in contact are multiplied (i.e., if vertex $A$ has a number $x$ and is on top of vertex $A'$ that has a number $y$, then $x$ and $y$ are multiplied), and the $8$ products are then added.
Prove that, for any order in which the vertices may have been numbered, it is always possible to place one octagon on top of the other so that the final sum is at least $162$.

Note: the octagons can be rotated.
