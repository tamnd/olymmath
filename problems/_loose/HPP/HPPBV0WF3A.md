---
tag: HPPBV0WF3A
kind: problem
type: answer
answer: 2^with\geq1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80213
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geqslant 3$ be a natural number. Let $x$ and $y$ be distinct natural numbers, between 1 and $n-1$. We say that $x$ and $y$ are friends if there exist natural numbers $a$ and $b$ such that $a x=b y \neq 0(\bmod n)$.

Determine the values of $n$ for which each integer between 1 and $n-1$ has an even number of friends between 1 and $n-1$.

Solved by Gaëtan Dautzenberg and Georges Tézé
