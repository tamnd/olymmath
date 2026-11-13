---
tag: TJF8SMGQJF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=111841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose there are 2019 points $A_{1}, A_{2}, \cdots$, $A_{2019}$ on a circle forming a regular 2019-gon. Players A and B play a game according to the following rules: starting from points $A_{1}$ and $A_{2}$, they first mark points $A_{1}$ and $A_{2}$; A starts by choosing an unmarked point $A_{i}$ such that $\triangle A_{1} A_{2} A_{i}$ is an obtuse triangle, then marks point $A_{i}$; in the next round, B starts by choosing an unmarked point $A_{j}$ such that $\triangle A_{k} A_{l} A_{j}$ is an acute triangle, then marks point $A_{j}$; then A chooses an unmarked point $A_{m}$ such that $\triangle A_{n} A_{j} A_{m}$ is an obtuse triangle, where $n=k$ or $n=l$, then marks point $A_{m}$; then it's B's turn to operate $\cdots \cdots$ A always forms an obtuse triangle on each turn, and B always forms an acute triangle on each turn. A player loses if and only if they cannot find an unmarked point to perform a valid move. Who has a winning strategy?
