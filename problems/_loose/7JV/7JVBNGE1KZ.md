---
tag: 7JVBNGE1KZ
kind: problem
type: answer
answer: \frac{2n+n^{2}}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10769
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Random Vectors. There are $n$ random vectors of the form $\left(y_{1}, y_{2}, y_{3}\right)$, where exactly one random coordinate is equal to 1, and the others are 0. They are added together. The resulting random vector is $\vec{a}$ with coordinates $\left(Y_{1}, Y_{2}, Y_{3}\right)$.

a) (from 9th grade. 2 points). Find the expected value of the random variable $\vec{a}^{2}$.

b) (from 9th grade. 2 points). Prove that $|\vec{a}| \geq \frac{n}{\sqrt{3}}$.
