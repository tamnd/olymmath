---
tag: QS8CGPD8SG
kind: problem
type: answer
answer: 2n-1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=116073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $[x]$ denote the greatest integer not exceeding the real number $x$. Given the sequence $\left\{a_{n}\right\}$ satisfies
$$
a_{1}=1, a_{n+1}=1+\frac{1}{a_{n}}+\ln a_{n} .
$$

Let $S_{n}=\left[a_{1}\right]+\left[a_{2}\right]+\cdots+\left[a_{n}\right]$. Find $S_{n}$.
