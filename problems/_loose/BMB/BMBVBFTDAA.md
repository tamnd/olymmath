---
tag: BMBVBFTDAA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90623
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The tower function of twos, $T(n)$, is defined by $T(1)=2$ and $T(n+1)=2^{T(n)}$ for $n \geq 1$. Prove that $T(n)-T(n-1)$ is divisible by $n$ ! for $n \geq 2$.
