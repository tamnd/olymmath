---
tag: 7STGPPNE6C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}$ be a strictly positive integer. We construct a sequence of integers $a_{1}, a_{2}, \cdots$ according to the following procedure:

- if the units digit of $a_{i}$ is strictly greater than 5, then $a_{i+1}=9 a_{i}$.
- if the units digit of $a_{i}$ is less than or equal to 5, we erase this digit and the number thus formed is $a_{i+1}$.

Obviously, if we have erased all the digits of $a_{i}$, the procedure stops and there is no $a_{i+1}$.

Can we choose $a_{0}$ so that the sequence thus constructed is infinite?
