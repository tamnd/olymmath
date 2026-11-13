---
tag: ZEBZNE8K7M
kind: problem
type: answer
answer: a_{n}=\frac{5}{4}+\frac{1}{12}(-3)^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=145389
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the sequence $\left\{a_{n}\right\}$,
$$
\begin{aligned}
a_{1}= & 1, a_{2}=2, a_{3}=-1, \\
& a_{n}+2 a_{n}+1=4 a_{n+1} 1 a_{n}-6 a_{n}+1 a_{n-1}+9 a n a_{n-1}-6 a_{n}^{2} .
\end{aligned}
$$

Find $a_{n}$.
