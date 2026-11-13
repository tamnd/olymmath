---
tag: NW4BMCVNRM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162864
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0001.parquet#row=154
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2015
    source: hf-mathnet
    label: Slovenia National Math Olympiad 2015 – Final Round
---
Let there be a square $A B C D$ and points $E$ and $F$ outside the square such that triangles $B E C$ and $C F D$ are equilateral. Prove that triangle $A E F$ is also equilateral.
