---
tag: J0DNK0WH1S
kind: problem
type: answer
answer: AB=80,AC=45,BC=100
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=163154
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Slovenia/train/0000.parquet#row=398
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo
    source: hf-mathnet
    label: Slovenia National Math Olympiad
---
In triangle $A B C$, the bisector of angle $\angle B A C$ intersects side $B C$ at point $D$. Triangle $A D C$ is isosceles with vertex $D$, and it is also given that $|C D|=36$ and $|B D|=64$. Calculate the lengths of the sides of triangle $A B C$.
