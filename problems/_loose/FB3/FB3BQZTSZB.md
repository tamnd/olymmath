---
tag: FB3BQZTSZB
kind: problem
type: answer
answer: a_{1}=2^{100000}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=96399
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Question 17 Given a sequence $a_{1}, a_{2}, a_{3}, \cdots$, where $a_{1}$ is a natural number, and $a_{n+1}=\left[1.5 a_{n}\right]+1$ holds for all natural numbers $n$. Is it possible to choose $a_{1}$ such that the first 100000 terms of this sequence are all even, and the 100001st term is odd?
(Federal Republic of Germany 1981 Mathematics Competition)
