---
tag: QBD4ECF4MN
kind: problem
type: answer
answer: s_{n}=n(n-1)2^{n-2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=173787
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let's determine the sum of the following sequence:

$$
S_{n}=2\binom{n}{2}+6\binom{n}{3}+\cdots+(n-2)(n-1)\binom{n}{n-1}+(n-1) n\binom{n}{n}
$$
