---
tag: FCAR6SK4XZ
kind: problem
type: answer
answer: "31"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233560
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $x>1$ with $n$ divisors, define $f(x)$ to be the product of the smallest $\lceil\tfrac{n}{2}\rceil$ divisors of $x$. Let $a$ be the least value of $x$ such that $f(x)$ is a multiple of $X$, and $b$ be the least value of $n$ such that $f(y)$ is a multiple of $y$ for some $y$ that has exactly $n$ factors. Compute $a+b$.
