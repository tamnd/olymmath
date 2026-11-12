---
tag: KMJXQAK8HR
kind: problem
type: answer
answer: "18298225"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=18872
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(x_{n}\right)$ is defined by the conditions: $x_{1}=1$, and for each natural number $n$, the number $x_{n+1}$ is the largest number that can be obtained by rearranging the digits of the number $x_{n}+1$. Find the smallest $n$ for which the decimal representation of the number $x_{n}$ has exactly 2017 digits.
