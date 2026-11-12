---
tag: D6SW4YZ2H7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=38883
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)=\left(x-x_{1}\right) \ldots\left(x-x_{n}\right)$, where the numbers $x_{1}, \ldots, x_{n}$ are pairwise distinct and non-zero. Prove that

$$
\sum_{i=1}^{n} \frac{x_{i}^{k}}{f^{\prime}\left(x_{i}\right)}= \begin{cases}0 & \text { for } 0 \leqslant k \leqslant n-2 \\ 1 & \text { for } k=n-1\end{cases}
$$
