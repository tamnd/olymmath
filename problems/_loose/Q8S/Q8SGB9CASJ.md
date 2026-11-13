---
tag: Q8SGB9CASJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250820
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=21
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $ABCD$ be a convex quadrilateral inscibed in circle $(O)$ such that $DB = DA + DC$. The point $P$ lies on the ray $AC$ such that $AP = BC$. The point $E$ is on $(O)$ such that $BE \perp AD$. Prove that $DP$ is parallel to the angle bisector of $\angle BEC$.
