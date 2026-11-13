---
tag: JVYJ91JD44
kind: problem
type: answer
answer: 2n!-n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97324
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $\left\{a_{n}\right\}: a_{1}=0, a_{2}=1$,
$$
\begin{aligned}
a_{n}= & \frac{1}{2} n a_{n-1}+\frac{1}{2} n(n-1) a_{n-2}+ \\
& (-1)^{n}\left(1-\frac{n}{2}\right)(n \geqslant 3) .
\end{aligned}
$$

Find the simplest expression for $f_{n}=\sum_{k=1}^{n} k \mathrm{C}_{n}^{k-1} a_{n+1-k}$.
