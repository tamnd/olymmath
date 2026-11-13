---
tag: 3QHSZPN2G4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=164528
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Starting from the given numbers $y_{0}, y_{1}, \ldots, y_{n}$, we form the numbers

$$
\begin{aligned}
x_{0} & =y_{0} \\
x_{i} & =\frac{1}{2} x_{i-1}+y_{i} (i=1,2, \ldots, n)
\end{aligned}
$$

Prove that

$$
\left(x_{0}^{2}+x_{1}^{2}+\ldots+x_{n}^{2}\right)<4\left(y^{2}+y_{1}^{2}+\ldots+y_{n}^{2}\right)
$$
