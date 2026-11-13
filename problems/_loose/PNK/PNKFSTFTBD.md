---
tag: PNKFSTFTBD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242731
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n\ge 2$ be a positive integer. $S$ is a set of $2n$ airports. For two arbitrary airports $A,B$, if there is an airway from $A$ to $B$, then there is an airway from $B$ to $A$. Suppose that $S$ has only one independent set of $n$ airports. Let the independent set $X$. Prove that there exists an airport $P\in S\setminus X$ which satisfies following condition.

**Condition** : For two arbitrary distinct airports $A,B\in S\setminus \{P\}$, if there exists a path connecting $A$ and $B$, then there exists a path connecting $A$ and $B$ which does not pass $P$.
