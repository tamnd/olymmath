---
tag: MJ7H3KVXHP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168276
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A_{1} A_{2} A_{3} A_{4} A_{5}$ be a convex pentagon, and let the intersection points of its diagonals be $B_{1}, B_{2}, B_{3}, B_{4}$, and $B_{5}$ such that $B_{1}$ is the intersection of the diagonals $A_{2} A_{4}$ and $A_{3} A_{5}$ - that is, the intersection of the two diagonals whose four endpoints include every index except 1 - and so on. The following two equalities need to be proven:

$$
\begin{aligned}
& A_{1} B_{4} \cdot A_{2} B_{5} \cdot A_{3} B_{1} \cdot A_{4} B_{2} \cdot A_{5} B_{3}=A_{1} B_{3} \cdot A_{2} B_{4} \cdot A_{3} B_{5} \cdot A_{4} B_{1} \cdot A_{5} B_{2} \\
& A_{1} B_{5} \cdot A_{2} B_{1} \cdot A_{3} B_{2} \cdot A_{4} B_{3} \cdot A_{5} B_{4}=A_{1} B_{2} \cdot A_{2} B_{3} \cdot A_{3} B_{4} \cdot A_{4} B_{5} \cdot A_{5} B_{1}
\end{aligned}
$$
