---
tag: CYAFHNWVRA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=55230
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each natural number $n$, denote by $P(n)$ the number of partitions of $n$ into a sum of natural addends (partitions differing only in the order of the addends are considered the same; for example, $P(4)=5$, because $4=4=1+3=2+2=1+1+2=1+1+1+1$ - five ways).

a) The number of different numbers in a given partition is called its spread (for example, the partition $4=1+1+2$ has a spread of 2 because there are two different numbers in this partition). Prove that the sum $Q(n)$ of the spreads of all partitions of the number $n$ is equal to $1+P(1)+P(2)+\ldots+P(n-1)$.

b) Prove that $Q(n) \leq \sqrt{2 n} \cdot P(n)$.
