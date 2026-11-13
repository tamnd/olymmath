---
tag: S6YJHAZW3A
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251012
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0000.parquet#row=172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2, a_3,...$ be a sequence of real numbers which satisfy the relation $a_{n+1} =\sqrt{a_n^2 + 1}$
Suppose that there exists a positive integer $n_0$ such that $a_{2n_0} = 3a_{n_0}$ . Find the value of $a_{46}$.
