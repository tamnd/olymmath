---
tag: NHGNSKXSKD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242706
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Positive real sequences $\{ a_n \}$ and $\{ b_n \}$ satisfy the following conditions for all positive integers $n$.

- $a_{n+1}b_{n+1}= a_n^2 + b_n^2$

- $a_{n+1}+b_{n+1}=a_nb_n$

- $a_n \geq b_n$

Prove that there exists positive integer $n$ such that $\frac{a_n}{b_n}>2023^{2023}.$
