---
tag: AEQVQY8BYF
kind: problem
type: answer
answer: \lambda={\begin{pmatrix}\frac{\sqrt{3}n}{3}(n=1,2),\\n-1(n\geqslant3)0\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127126
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x_{i} \in \mathbf{R}^{+}(i=1,2, \cdots, n)$, and $x_{1} x_{2} \cdots x_{n}=1, n$ be a given positive integer. Try to find the smallest positive number $\lambda$, such that the inequality $\frac{1}{\sqrt{1+2 x_{1}}}+\frac{1}{\sqrt{1+2 x_{2}}}+\cdots+\frac{1}{\sqrt{1+2 x_{n}}} \leqslant \lambda$ always holds.
