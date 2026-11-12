---
tag: 8MJDEQ92D9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=24318
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that vectors with coordinates $\left(a_{1}, a_{2}, a_{3}\right),\left(b_{1}, b_{2}, b_{3}\right)$ and $\left(c_{1}, c_{2}, c_{3}\right)$ are parallel to one plane if and only if

$$
a_{1} b_{2} c_{3}+a_{2} b_{3} c_{1}+a_{3} b_{1} c_{2}=a_{1} b_{3} c_{2}+a_{2} b_{1} c_{3}+a_{3} b_{2} c_{1}
$$

For those familiar with the concept of matrix multiplication, let us explain the connection between the vector product and the commutator of two matrices. Each vector $\mathrm{a}=\left(a_{1}, a_{2}, a_{3}\right)$ in three-dimensional space can be associated with a skew-symmetric matrix

$$
A=\left(\begin{array}{rrr}
0 & -a_{3} & a_{2} \\
a_{3} & 0 & -a_{1} \\
-a_{2} & a_{1} & 0
\end{array}\right)
$$

Let vectors $\mathbf{a}$ and $\mathbf{b}$ be associated with matrices $A$ and $B$. Consider the matrix $[A, B]=A B-B A$ - the commutator of matrices $A$ and $B$. Simple calculations show that the vector $[\mathbf{a}, \mathbf{b}]$ is associated with the matrix $[A, B]$.
