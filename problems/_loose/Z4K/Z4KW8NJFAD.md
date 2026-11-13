---
tag: Z4KW8NJFAD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=169759
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence

$$
a_{k}=\frac{a_{1}}{1+(k-1) a_{1}} \left(a_{1}>0 ; k=1,2, \ldots, n\right)
$$

Prove that

$$
a_{1} a_{2}+a_{2} a_{3}+\cdots+a_{n-1} a_{n}=(n-1) a_{1} a_{n}
$$
