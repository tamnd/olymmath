---
tag: REDVQN83XT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95422
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a positive integer $n \geqslant 1$, a partition $\pi$ is a way of writing $n$ as a sum of one or more positive integers in non-decreasing order (for example, if $n=4$, the partitions $\pi$ are $1+1+1+1$, $1+1+2$, $1+3$, $2+2$, $4$). For any partition $\pi$, define $A(\pi)$ as the number of times 1 appears in the partition $\pi$, and define $B(\pi)$ as the number of distinct integers in the partition $\pi$ (for example, for a partition $\pi: 1+1+2+2+2+5$ of $n=13$, $A(\pi)=2$, $B(\pi)=3$).

Prove that for any positive integer $n$, the sum of $A(\pi)$ over all partitions $\pi$ of $n$ is equal to the sum of $B(\pi)$ over all partitions $\pi$ of $n$.
