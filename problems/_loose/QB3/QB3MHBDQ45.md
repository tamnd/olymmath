---
tag: QB3MHBDQ45
kind: problem
type: answer
answer: a_{n}=3^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34611
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(a_{n}\right)$ satisfies the conditions:

$$
a_{1}=3, a_{2}=9, a_{n+1}=4 a_{n}-3 a_{n-1}(n>1)
$$

Find the formula for the general term of the sequence.
