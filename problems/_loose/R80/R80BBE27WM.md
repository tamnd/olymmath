---
tag: R80BBE27WM
kind: problem
type: answer
answer: \lim_{narrow\infty}x_{n}=0,\lim_{narrow\infty}a_{n}=12,\lim_{narrow\infty}b_{n}=e^{-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178094
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequences $\left(x_{n}\right)_{n \geq 1},\left(a_{n}\right)_{n \geq 1},\left(b_{n}\right)_{n \geq 1}$, where

$$
\begin{aligned}
& x_{n}=\frac{(n+1) \cdot(n+2)}{1^{2}+\left(1^{2}+2^{2}\right)+\left(1^{2}+2^{2}+3^{2}\right)+\ldots \ldots . .+\left(1^{2}+2^{2}+3^{2}+\ldots . .+n^{2}\right)}, a_{n}=x_{1}+x_{2}+\cdots+x_{n} \\
& b_{n}=\left(\frac{a_{n}}{12}\right)^{n} . \text { Determine the limits of the three sequences. }
\end{aligned}
$$
