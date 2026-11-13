---
tag: DMJN6Y9DRY
kind: problem
type: answer
answer: e^{-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=179886
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the matrix $A=\left(\begin{array}{cc}5 & 4 \\ -2 & -1\end{array}\right), A \in \mathcal{M}_{2}(\mathbb{R})$.

a) Show that $A^{2}-4 A+3 I_{2}=O_{2}$.

b) Show that there exist two sequences of real numbers $\left(x_{n}\right)_{n \geq 1}$ and $\left(y_{n}\right)_{n \geq 1}$ such that $A^{n}=x_{n} \cdot A+y_{n} \cdot I_{2},(\forall) n \geq 1$ and then compute the limit

$$
\lim _{n \rightarrow \infty}\left(\frac{2 x_{n}}{3^{n}+1}\right)^{3^{n}}
$$
