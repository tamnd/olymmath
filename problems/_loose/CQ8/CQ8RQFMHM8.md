---
tag: CQ8RQFMHM8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235827
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
A right triangle $ABC$ has the right angle at vertex $A$. Circle $c$ passes through vertices $A$ and $B$ of the triangle $ABC$ and intersects the sides $AC$ and $BC$ correspondingly at points $D$ and $E$. The line segment $CD$ has the same length as the diameter of the circle $c$. Prove that the triangle $ABE$ is isosceles.
