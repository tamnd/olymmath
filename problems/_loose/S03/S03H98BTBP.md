---
tag: S03H98BTBP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253743
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Turkey/train/0000.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1, a_2, ... , a_{1000}$ be a sequence of integers such that $a_1=3, a_2=7$ and for all $n=2, 3, ... , 999$
$a_{n+1}-a_n=4(a_1+a_2)(a_2+a_3) ... (a_{n-1}+a_n)$.
Find the number of indices $1\leq n\leq 1000$ for which $a_n+2018$ is a perfect square.
