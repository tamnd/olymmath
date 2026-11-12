---
tag: HWZCAV486B
kind: problem
type: answer
answer: 1,4,
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=28864
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(NRP, 83). Find all values of $n \in \mathbf{N}$ for each of which there exists a permutation

$$
\left(a_{1} ; a_{2} ; \ldots ; a_{n}\right)
$$

of the numbers $0,1, \ldots, n-1$, such that all numbers

$$
a_{1}, a_{1} a_{2}, a_{1} a_{2} a_{3}, \ldots, a_{1} a_{2} \ldots a_{n}
$$

give different remainders when divided by $n$.
