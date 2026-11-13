---
tag: 8GCMG6EJRE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=390
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2023
    source: hf-mathnet
    label: Baltic Way Baltic Way 2023 Shortlist
---
For positive integers $n$, $k$ let $S(n, k)$ be the number of ways to partition a set with $n$ elements into $k$ non-empty parts. For example $S(3, 2) = 3$, because there are three ways to partition the set $\{1, 2, 3\}$ into two parts. For another example, $S(4, 2) = 7$.
Let $p$ be a prime number, and $m$, $n$ positive integers such that $p-1 \mid m-n$. Prove that $S(m, i) \equiv S(n, i) \pmod{p}$ for all $i = 1, 2, \dots, p-1$.
