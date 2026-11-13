---
tag: 9YZ2AFNZPN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75158
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider an infinite sequence $a_{0}, a_{1}, a_{2}, \ldots$ of integers that satisfies the conditions $a_{0} \geqq 1$ and $a_{n+1} \in\left\{2022 a_{n}-1,2022 a_{n}+1\right\}$ for all indices $n \geqq 0$. Prove that every such sequence contains infinitely many composite numbers. (Martin Melicher)
