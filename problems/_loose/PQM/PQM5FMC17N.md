---
tag: PQM5FMC17N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=176802
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Middle_European_Mathematical_Olympiad_MEMO/train/0000.parquet#row=113
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Initially, two positive integers $a$ and $b$ with $a \neq b$ are written on a blackboard. At each step, Andrea picks two numbers $x$ and $y$ on the blackboard with $x \neq y$ and writes the number

$$
\operatorname{gcd}(x, y)+\operatorname{lcm}(x, y)
$$

on the blackboard as well. Let $n$ be a positive integer. Prove that, regardless of the values of $a$ and $b$, Andrea can perform a finite number of steps such that a multiple of $n$ appears on the blackboard.

Remark. If $x$ and $y$ are two positive integers, then $\operatorname{gcd}(x, y)$ denotes their greatest common divisor and $\operatorname{lcm}(x, y)$ their least common multiple.
