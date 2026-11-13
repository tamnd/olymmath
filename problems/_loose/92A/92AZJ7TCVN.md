---
tag: 92AZJ7TCVN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241647
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer $n$ greater than $1$, suppose $x_1,x_2,\ldots,x_n$ are integers such that none of them is divisible by $n$, and neither their sum. Prove that there exists atleast $n-1$ non-empty subsets $\mathcal I\subseteq \{1,\ldots, n\}$ such that $\sum_{i\in\mathcal I}x_i$ is divisible by $n$
