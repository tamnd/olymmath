---
tag: XW09YTRBEH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248544
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Given a triangle $A_1A_2A_3$ and the points $B_1$ and $D_2$ on the side $[A_1A_2], B_2$ and $D_3$ on the side $[A_2A3], B_3$ and $D_1$ on the side $[A_3A_1]$. If you build parallelograms $A_1B_1C_1D_1, A_2B_2C_2D_2$ and $A_3B_3C_3D_3$, the lines $(A_1C_1), (A_2C_2)$ and $(A_3C_3)$, will cross in one point $O$. Prove that if $|A_1B_1| = |A_2D_2|$ and $|A_2B_2| = |A_3D_3|$, than $|A_3B_3| = |A_1D_1|$.
b) Given a convex polygon $A_1A_2 ... A_n$ and the points $B_1$ and $D_2$ on the side $[A_1A_2], B_2$ and $D_3$ on the side $[A_2A_3], ... B_n$ and $D_1$ on the side $[A_nA_1]$. Ifyou build parallelograms $A_1B_1C_1D_1, A_2B_2C_2D_2 ... , A_nB_nC_nD_n$, the lines $(A_1C_1), (A_2C_2), ..., (A_nC_n)$, will cross in one point $O$. Prove that $|A_1B_1| \cdot |A_2B_2|\cdot ... \cdot |A_nB_n| = |A_1D_1|\cdot |A_2D_2|\cdot ...\cdot |A_nD_n|$.
