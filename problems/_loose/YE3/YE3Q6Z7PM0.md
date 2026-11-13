---
tag: YE3Q6Z7PM0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221629
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a $3$ by $3$ table, by a $k$-worm, we mean a path of different cells $(S_1,S_2,...,S_k)$ such that each two consecutive cells have one side in common. The $k$-worm at each steep can go one cell forward and turn to the $(S,S_1,...,S_{k-1})$ if $S$ is an unfilled cell which is adjacent (has one side in common) with $S_1$. Find the maximum number of $k$ such that there is a $k$-worm $(S_1,...,S_k)$ such that after finitly many steps can be turned to $(S_k,...,S_1)$.
