---
tag: YZFK3TMCV7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90405
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0007.parquet#row=15
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{0}=a_{1}=1$ and $a_{n+1}=7 a_{n}-a_{n-1}-2$ for all positive integers $n$. Prove that $a_{n}$ is a perfect square for all $n$.
