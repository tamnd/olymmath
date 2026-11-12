---
tag: VVQP75KGTA
kind: problem
type: answer
answer: \begin{pmatrix}Y&1&4\\p&0.5&0.5\end{pmatrix}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32407
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A discrete random variable $X$ is given by the distribution law:

$$
\begin{array}{lrrrr}
X & -1 & -2 & 1 & 2 \\
p & 0.3 & 0.1 & 0.2 & 0.4
\end{array}
$$

Find the distribution law of the random variable $Y=X^{2}$.
