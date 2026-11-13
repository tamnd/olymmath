---
tag: TEYQVPT2F7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204631
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a positive integer. On a blackboard is a circle, and around it $n$ non-negative integers are written. Raphinha plays a game in which an operation consists of erasing a number $a$ neighboring $b$ and $c$, with $b \geq c$, and writing in its place $b + c$ if $b + c \leq 5a/4$ and $b - c$ otherwise.

Your goal is to make all the numbers on the board equal $0$. Find all $n$ such that Raphinha always manages to reach her goal.
