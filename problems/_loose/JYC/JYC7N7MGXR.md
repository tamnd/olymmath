---
tag: JYC7N7MGXR
kind: problem
type: answer
answer: 2^{30}(2^{31}-1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A natural number $n$ is said to be perfect if the sum of all its proper divisors, that is, different from $n$, is equal to $n$. For example, 6 and 28 are perfect, since: $6=1+2+3$ and $28=1+2+4+7+14$. Knowing that $2^{31}-1$ is a prime number, show that $2^{30}\left(2^{31}-1\right)$ is a perfect number.
