---
tag: HTPH65VD56
kind: problem
type: answer
answer: a_{n}=4n-3
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=34609
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The sequence $\left(a_{n}\right)$ satisfies the conditions:

$$
a_{1}=1, a_{2}=5, a_{n+1}=2 a_{n}-a_{n-1}(n>1)
$$

Find the formula for the general term of the sequence.
