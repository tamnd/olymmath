---
tag: Z8SGX9QCHM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127272
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=48
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-smo
    source: hf-mathnet
    label: China China Southeastern Mathematical Olympiad
---
Let the sequence $\left\{a_{n}\right\}$ satisfy: $a_{1}=a_{2}=1, a_{n}=7 a_{n-1}-a_{n-2}, n>3$. Prove: For each $n \in N^{*}, a_{n}+a_{n+1}+2$ is always a perfect square.
