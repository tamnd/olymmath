---
tag: 5VDGMJ0FG6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=170848
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the sequence $\left(a_{n}\right)$ as follows: $a_{0}=a_{1}=0, a_{2}=1, a_{n+3}=a_{n+1}+1998 a_{n}$. Show that for any positive integer $n$:

$$
a_{2 n-1}=2 a_{n} a_{n+1}+1998 a_{n-1}^{2}
$$
