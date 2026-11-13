---
tag: 4X3KP0TQPW
kind: problem
type: answer
answer: \binom{p+q}{p}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245903
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ and $q$ be relatively prime positive integers. A subset $S\subseteq \mathbb{N}_0$ is called ideal if $0 \in S$ and, for each element $n \in S$, the integers $n+p$ and $n+q$ belong to $S$. Determine the number of ideal subsets of $\mathbb{N}_0$.
