---
tag: ACNHJMFY71
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205879
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $n>2$ and let $A_1,\dots,A_n$ be points on the plane such that no three are collinear.
**(a)** Suppose $M_1,\dots,M_n$ be points on segments $A_1A_2,A_2A_3,\dots ,A_nA_1$ respectively. Prove that if $B_1,\dots,B_n$ are points in triangles $M_2A_2M_1,M_3A_3M_2,\dots ,M_1A_1M_n$ respectively then $$|B_1B_2|+|B_2B_3|+\dots+|B_nB_1| \leq |A_1A_2|+|A_2A_3|+\dots+|A_nA_1|$$
Where $|XY|$ means the length of line segment between $X$ and $Y$.

**(b)** If $X$, $Y$ and $Z$ are three points on the plane then by $H_{XYZ}$ we mean the half-plane that it's boundary is the exterior angle bisector of angle $\hat{XYZ}$ and doesn't contain $X$ and $Z$ ,having $Y$ crossed out.
Prove that if $C_1,\dots ,C_n$ are points in ${H_{A_nA_1A_2},H_{A_1A_2A_3},\dots,H_{A_{n-1}A_nA_1}}$ then $$|A_1A_2|+|A_2A_3|+\dots +|A_nA_1| \leq |C_1C_2|+|C_2C_3|+\dots+|C_nC_1|$$
