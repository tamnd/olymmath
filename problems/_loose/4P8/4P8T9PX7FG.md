---
tag: 4P8T9PX7FG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91068
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}$ and $t_{1}, t_{2}, \ldots, t_{k}$ be different positive divisors of $n$. An identity of the form $n=t_{1}+t_{2}+\ldots+t_{k}$ is called a representation of $n$ as a sum of different divisors. Two such representations are considered equal if they differ only in the order of the summands (for example, $20=10+5+4+1$ and $20=5+1+10+4$ are twice the same representation of 20 as the sum of different divisors). Let $a(n)$ be the number of different representations of $n$ as the sum of different divisors. Show or disprove:

There is an $M \in \mathbb{N}$ with $a(n) \leq M$ for all $n \in \mathbb{N}$.
