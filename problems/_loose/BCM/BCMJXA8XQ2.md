---
tag: BCMJXA8XQ2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90473
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, a_{3}, \ldots$ be a sequence of positive integers with the following property: if $S$ is any nonempty set of positive integers, there exists $s \in S$ with $a_{s} \leq \operatorname{gcd}(S)$. Prove that $n$ ! is divisible by $a_{1} a_{2} \cdots a_{n}$ for every positive integer $n$.
