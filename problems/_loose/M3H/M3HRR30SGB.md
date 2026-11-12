---
tag: M3HRR30SGB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be some matrix of order $m \times n$. We call a matrix $A^{+}$ of order $n \times m$ the pseudoinverse of matrix $A$ if

$$
A A^{+} A=A, A^{+} A A^{+}=A^{+}, \left(A A^{+}\right)^{*}=A A^{+}, \left(A^{+} A\right)^{*}=A^{+} A
$$

Show that a matrix $A^{+}$ with these properties exists and is unique.

Prove that the solution to the least squares problem

$$
\widehat{x}=\arg \min \left\{\left\|x^{*}\right\|: x^{*} \in \operatorname{Arg} \min _{x \in \mathbb{R}^{n}}\|A x-b\|\right\}
$$

for any $b \in \mathbb{R}^{m}$ is given by the formula $\hat{x}=A^{+} b$. In particular, if $A$ has full rank, then $A^{+}=\left(A^{*} A\right)^{-1} A^{*}$.
