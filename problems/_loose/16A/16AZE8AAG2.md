---
tag: 16AZE8AAG2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90388
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A sequence $a_{1}, a_{2}, \ldots$ of positive integers satisfies

$$
a_{n+1}=a_{n}^{3}+103
$$

for every positive integer $n$. Prove that the sequence contains at most one perfect square.
