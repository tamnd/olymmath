---
tag: 7TDKHDNWBY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28199
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
a) Prove that if $A, B, C$ and $D$ are arbitrary points on a plane, then $A B \cdot C D + B C \cdot A D \geqslant A C \cdot B D$ (Ptolemy's inequality).

b) Prove that if $A_{1}, A_{2}, \ldots A_{6}$ are arbitrary points on a plane, then

$$
\begin{aligned}
& A_{1} A_{4} \cdot A_{2} A_{5} \cdot A_{3} A_{6} \leqslant A_{1} A_{2} \cdot A_{3} A_{6} \cdot A_{4} A_{5} + A_{1} A_{2} \cdot A_{3} A_{4} \cdot A_{5} A_{6} + \\
& + A_{2} A_{3} \cdot A_{1} A_{4} \cdot A_{5} A_{6} + A_{2} A_{3} \cdot A_{4} A_{5} \cdot A_{1} A_{6} + A_{3} A_{4} \cdot A_{2} A_{5} \cdot A_{1} A_{6}
\end{aligned}
$$

c) Prove that (non-strict) Ptolemy's inequality becomes an equality if and only if $A B C D$ is a (convex) cyclic quadrilateral.

d) Prove that the inequality from part b) becomes an equality if and only if $A_{1} \ldots A_{6}$ is a cyclic hexagon.
