---
tag: MS7GNWPX55
kind: problem
type: answer
answer: \frac{1}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217755
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a real number $a$ and a sequence $(x_n)_{n=1}^\infty$ defined by:
$$\left\{\begin{matrix} x_1=1 \\ x_2=0 \\ x_{n+2}=\frac{x_n^2+x_{n+1}^2}{4}+a\end{matrix}\right.$$
for all positive integers $n$.
1. For $a=0$, prove that $(x_n)$ converges.
2. Determine the largest possible value of $a$ such that $(x_n)$ converges.
