---
tag: CPEDYRGWV0
kind: problem
type: answer
answer: \min(2n + 2m + 2, 3n + 2)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243168
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given two positive integers $m$ and $n$, find the largest $k$ in terms of $m$ and $n$ such that the following condition holds:

Any tree graph $G$ with $k$ vertices has two (possibly equal) vertices $u$ and $v$ such that for any other vertex $w$ in $G$, either there is a path of length at most $m$ from $u$ to $w$, or there is a path of length at most $n$ from $v$ to $w$.

*Proposed by Ivan Chan*
