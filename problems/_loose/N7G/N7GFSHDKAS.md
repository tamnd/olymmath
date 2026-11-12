---
tag: N7GFSHDKAS
kind: problem
type: answer
answer: M(X)=\lambda
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32348
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the mathematical expectation of a discrete random variable $X$ distributed according to the Poisson law:

$$
\begin{array}{cccccc}
X & 0 & 1 & 2 & k & k \\
p & \mathrm{e}^{-\lambda} & \frac{\lambda \mathrm{e}^{-\lambda}}{1!} & \frac{\lambda^{2} \mathrm{e}^{-\lambda}}{2!} \cdots \frac{\lambda^{k} \mathrm{e}^{-\lambda}}{k!} \cdots
\end{array}
$$
