---
tag: VM0BPBAKPY
kind: problem
type: answer
answer: 'Part 1: 2^n. Part 2: c ≥ 1.'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Saudi_Arabia/train/0001.parquet#row=201
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the polynomial $f(x) = c x(x - 2)$ where $c$ is a positive real number. For any $n \in \mathbb{Z}^{+}$, the notation $g_n(x)$ is a composite function $n$ times of $f$ and assume that the equation $g_n(x) = 0$ has all of the $2^n$ solutions are real numbers.
1. For $c = 5$, find in terms of $n$, the sum of all the solutions of $g_n(x)$, of which each multiple (if any) is counted only once.
2. Prove that $c \ge 1$.
