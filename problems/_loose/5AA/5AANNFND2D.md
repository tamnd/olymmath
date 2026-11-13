---
tag: 5AANNFND2D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=88366
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Croatia/train/0001.parquet#row=180
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hr-mo/2018
    source: hf-mathnet
    label: Croatia Croatia_2018
---
Dani are a prime number $p$ and a natural number $n \geqslant p-1$. If the number $n p+1$ is a square of some natural number, prove that the number $n+1$ is the sum of squares of some $p$ natural numbers.
