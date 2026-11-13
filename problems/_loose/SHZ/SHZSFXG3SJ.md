---
tag: SHZSFXG3SJ
kind: problem
type: answer
answer: F_1:F_2=2:1,\alpha=60
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=185970
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $A B C D$ is a convex quadrilateral, its area is divided into two triangular areas by the diagonal $A C$, namely the area of triangle $A B C$ and the area of triangle $A C D$. Let the area of triangle $A B C$ be denoted by $F_{1}$, the area of triangle $A C D$ by $F_{2}$, and the size of the angle $\angle D A B$ by $\alpha$.

For a convex quadrilateral $A B C D$, the following properties are required:

$$
\begin{array}{r}
A B \| C D \\
|A B|>|C D| \\
|B C|=|C D|=|D A| \\
A C \perp B C
\end{array}
$$

Prove that the requirements (1) to (4) can be satisfied and that the values of $F_{1}: F_{2}$ and $\alpha$ are uniquely determined by these requirements. Determine these values.
