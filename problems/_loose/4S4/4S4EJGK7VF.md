---
tag: 4S4EJGK7VF
kind: problem
type: answer
answer: \text{The sequence } \{d(n^2 + 1)\}_{n=n_0}^\infty \text{ is not strictly monotone.}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269266
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $d(k)$ denote the number of natural divisors of a natural number $k$. Prove that for any natural number $n_0$ the sequence $\left\{d(n^2+1)\right\}^\infty_{n=n_0}$ is not strictly monotone.
