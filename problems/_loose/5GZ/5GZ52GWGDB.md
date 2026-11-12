---
tag: 5GZ52GWGDB
kind: problem
type: answer
answer: X:\begin{pmatrix}x_{i}&1&2&3\\p_{i}&0.3&0.2&0.5\end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=31704
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A discrete random variable $X$ has three possible values: $x_{1}=1, x_{2}$, and $x_{3}$, with $x_{1}<x_{2}<x_{3}$. The probabilities that $X$ will take the values $x_{1}$ and $x_{2}$ are 0.3 and 0.2, respectively. The expected value of this variable is $M(X)=2.2$, and the variance is $D(X)=0.76$. Find the distribution series of the variable $X$.
