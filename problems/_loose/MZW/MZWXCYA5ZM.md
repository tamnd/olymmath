---
tag: MZWXCYA5ZM
kind: problem
type: answer
answer: c_n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218614
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any positive integer $n$, define
$$c_n=\min_{(z_1,z_2,...,z_n)\in\{-1,1\}^n} |z_1\cdot 1^{2018} + z_2\cdot 2^{2018} + ... + z_n\cdot n^{2018}|.$$
Is the sequence $(c_n)_{n\in\mathbb{Z}^+}$ bounded?
