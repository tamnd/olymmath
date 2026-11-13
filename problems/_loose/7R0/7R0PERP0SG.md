---
tag: 7R0PERP0SG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=131248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Xiaoming plays a computer game, starting with only the number 1. The computer performs operations sequentially, each time replacing every existing number $x$ with four numbers $10 x+1, 10 x+2, 10 x+3, 10 x+4$. For any $n \geqslant 1$, between the $n$-th and $(n+1)$-th operations by the computer, Xiaoming deletes some of the existing numbers in $n$ rounds, where in the $k$-th round, any two numbers $s, t$ deleted satisfy $\left[\frac{s}{10^{k}}\right] \neq\left[\frac{t}{10^{k}}\right](1 \leqslant k \leqslant n)$. Let $a_{n}$ be the number of numbers remaining after these $n$ rounds. Prove: $a_{n} \geqslant 2^{n}$. Here, $[x]$ denotes the integer part of $x$.
