---
tag: F099BNYK0C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=123
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia Russian Mathematical Olympiad
---
A pile of more than $n^2$ stones is put on the table. Pete and Basil make moves taking stones in turn; Pete moves first. By one move it is allowed to take $k$ stones from a pile if either $k = 1$, or $k$ is a prime number less than $n$, or $k$ is divisible by $n$. The one taking the last stone wins. Prove that Pete has a winning strategy. (S. Berlov)
