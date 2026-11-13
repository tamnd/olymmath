---
tag: VX70NJBYJ8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235899
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Inside a circle $c$ there are circles $c_1, c_2$ and $c_3$ which are tangent to $c$ at points $A, B$ and $C$ correspondingly, which are all different. Circles $c_2$ and $c_3$ have a common point $K$ in the segment $BC$, circles $c_3$ and $c_1$ have a common point $L$ in the segment $CA$, and circles $c_1$ and $c_2$ have a common point $M$ in the segment $AB$. Prove that the circles $c_1, c_2$ and $c_3$ intersect in the center of the circle $c$.
