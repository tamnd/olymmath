---
tag: X7K8JG6VCV
kind: problem
type: answer
answer: 4^k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We say that a positive integer is happy if can expressed in the form $ (a^{2}b)/(a - b)$ where $ a > b > 0$ are integers. We also say that a positive integer $ m$ is evil if it doesn't a happy integer $ n$ such that $ d(n) = m$. Prove that all integers happy and evil are a power of $ 4$.
