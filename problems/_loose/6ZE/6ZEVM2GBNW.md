---
tag: 6ZEVM2GBNW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205057
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=255
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_0B_0C_0$ be a triangle. For a positive integer $n \geq 1$, we define $A_n$ on the segment $B_{n-1}C_{n-1}$ such that $B_{n-1}A_n:C_{n-1}A_n=2:1$ and $B_n, C_n$ are defined cyclically in a similar manner. Show that there exists an unique point $P$ that lies in the interior of all triangles $A_nB_nC_n$.
