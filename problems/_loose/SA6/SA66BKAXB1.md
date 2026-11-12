---
tag: SA66BKAXB1
kind: problem
type: answer
answer: v_{1}=1,v_{2}=2,v_{3}=6;\mu_{1}=0,\mu_{2}=1,\mu_{3}=2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33032
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the first, second, and third order moments of the random variable $X$ with the probability density function

$$
p(x)=\left\{\begin{array}{lr}
0 & \text { if } x \leq 0 \\
e^{-x} & \text { if } x>0
\end{array}\right.
$$
