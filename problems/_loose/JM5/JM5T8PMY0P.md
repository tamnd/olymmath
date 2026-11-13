---
tag: JM5T8PMY0P
kind: problem
type: answer
answer: A = \begin{pmatrix} -1 & -\sqrt{3} \\ -\sqrt{3} & 1 \end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f$ be a linear transformation defined by a matrix $A=\left(
\begin{array}{cc}
a & b \\
c & d
\end{array}
\right)$. For any two points $P,\ Q$, which are not different from the origin, such that $\frac{OP'}{OP}=\frac{OQ'}{OQ}$ , let $P',\ Q'$ be the images of $P,\ Q$ by $f$ respectively.

(1) Prove that $a^2+c^2=b^2+d^2$.

(2) Find $A$ such that the point $(1,\ \sqrt{3})$ is mapped onto the point $(-4,\ 0)$ by the linear transformation $f$.
