---
tag: FWH3DGW2X0
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=224
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl
    source: hf-mathnet
    label: Baltic Way Baltic Way shortlist
---
Grandfather has a finite number of empty dustbins in his attic. Each dustbin is a rectangular parallelepiped with integral side lengths. A dustbin can be thrown away into another iff the side lengths of these dustbins can be set to one-to-one correspondence in such a way that the side lengths of the first dustbin are less than the corresponding side lengths of the other dustbin. No dustbin can contain two other dustbins unless the latter have been placed one into another. Grandfather wants to throw away as many dustbins as possible for saving space. He developed the following algorithm for it: find the longest chain of dustbins that can be thrown away into each other, then repeat the same with remaining dustbins, etc., until no more dustbins can be thrown away. When following this algorithm, the longest chain of dustbins to be chosen turned out to be unique at each step. Is it necessarily true that, as the result of the process, the maximal possible number of dustbins have been thrown away?
