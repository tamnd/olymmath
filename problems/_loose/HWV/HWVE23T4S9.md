---
tag: HWVE23T4S9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232384
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=51
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ and $q$ be prime numbers and $\{a_{n}\}_{n=1}^{\infty}$ be a sequence of integers defined by:
$$a_{0}=0, a_{1}=1, a_{n+2}=pa_{n+1}-qa_{n} \forall n\geq 0$$
Find $p$ and $q$ if there exists an integer $k$ such that $a_{3k}=-3$.
