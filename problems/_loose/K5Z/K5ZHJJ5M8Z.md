---
tag: K5ZHJJ5M8Z
kind: problem
type: answer
answer: \frac{(\lambda+1)^{2}}{3\lambda}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168335
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We consider the $\lambda$-ratio inscribed triangle $H^{\prime}=A^{\prime} B^{\prime} C^{\prime}$ of a triangle $H=A B C$ (where $\lambda>0$) to be the triangle whose vertices $A^{\prime}, B^{\prime}, C^{\prime}$ lie on the segments $B C, C A, A B$ respectively, and satisfy the following condition (1). Let the perimeter of the triangle $H_{0}=A_{0} B_{0} C_{0}$ be 1 unit, and let $H_{0}^{\prime}$ be the $\lambda$-ratio inscribed triangle of $H_{0}$. Starting from these, we construct the sequence of triangles $H_{n}, H^{\prime} n$ such that $H_{n+1}$ is the $\frac{1}{\lambda}$-ratio inscribed triangle of $H_{n}^{\prime}$, and $H_{n+1}^{\prime}$ is the $\lambda$-ratio inscribed triangle of $H_{n+1}$ $(n=0,1,2, \ldots)$.

$$
\frac{A C^{\prime}}{C^{\prime} B}=\frac{B A^{\prime}}{A^{\prime} C}=\frac{C B^{\prime}}{B^{\prime} A}=\lambda
$$

a) Calculate the sum of the perimeters of the triangles $H_{n}$ $(n=0,1,2, \ldots)$.

b) Prove that the ratio of the sum of the perimeters of the triangles $H_{n}$ and $H_{n}^{\prime}$ is equal to the ratio of the perimeters of the triangles $H_{0}$ and $H_{0}^{\prime}$.
