---
tag: QBR9WQQW57
kind: problem
type: answer
answer: (\lambda)={\begin{pmatrix}1,\lambda\geqslant2,\\\frac{2+\lambda}{4},0<\lambda<20\end{pmatrix}.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\lambda>0$, find the largest constant $c=c(\lambda)$, such that for all non-negative real numbers $x, y$, we have $x^{2}+y^{2}+\lambda x y \geqslant c(x+y)^{2}$.
