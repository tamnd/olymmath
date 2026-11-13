---
tag: YDMEVGYZ8C
kind: problem
type: answer
answer: \frac{n(n+1)(n-1)}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171459
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer and let $k_{1}, k_{2}, k_{3}, \ldots, k_{n}$ be any permutation of the integers from 1 to $n$. What is the maximum value of the $n$-term expression

$$
\left(1-k_{1}\right)^{2}+\left(2-k_{2}\right)^{2}+\left(3-k_{3}\right)^{2}+\ldots+\left(n-k_{n}\right)^{2}
$$
