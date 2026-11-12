---
tag: 6X9HEMKJTP
kind: problem
type: answer
answer: "2142"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33265
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using the property that the determinant of the matrix $C=A \cdot B$, which represents the product of square matrices $A$ and $B$ of the same order, is equal to the product of the determinants of matrices $A$ and $B$, i.e., $\operatorname{det} C=\operatorname{det} A \cdot \operatorname{det} B$, calculate the determinant of the matrix $\operatorname{det} C$.

$$
A=\left(\begin{array}{lll}
3 & 2 & 5 \\
0 & 2 & 8 \\
4 & 1 & 7
\end{array}\right), B=\left(\begin{array}{ccc}
-2 & 3 & 4 \\
-1 & -3 & 5 \\
0 & 4 & 3
\end{array}\right)
$$
