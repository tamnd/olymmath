---
tag: 1KG5Y92PMW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=230529
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=9
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The incircle of the triangle $ABC$ touches the sides $AC$ and $BC$ at points $P$ and $Q$ respectively. $N$ and $M$ are the midpoints of $AC$ and $BC$ respectively. Let $X=AM\cap BP, Y=BN\cap AQ$. Given $C,X,Y$ are collinear, prove that $CX$ is the angle bisector of the angle $ACB$.

I. Gorodnin
