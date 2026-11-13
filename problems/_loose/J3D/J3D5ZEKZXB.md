---
tag: J3D5ZEKZXB
kind: problem
type: answer
answer: 3k^2+2k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $k$ and $s$ be positive integers such that $s<(2 k+1)^{2}$. Initially, one cell out of an $n \times n$ grid is coloured green. On each turn, we pick some green cell $c$ and colour green some $s$ out of the $(2 k+1)^{2}$ cells in the $(2 k+1) \times(2 k+1)$ square centred at $c$. No cell may be coloured green twice. We say that $s$ is $k$-sparse if there exists some positive number $C$ such that, for every positive integer $n$, the total number of green cells after any number of turns is always going to be at most $C n$. Find, in terms of $k$, the least $k$-sparse integer $s$.
