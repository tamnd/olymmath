---
tag: W9BGK33Z8S
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=250
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl
    source: hf-mathnet
    label: Baltic Way Baltic Way shortlist
---
Let $\mathbb{T} = \{1, 3, 6, 10, 15, \dots\}$ be the set of triangular numbers, i.e. numbers of the form $T_n = \frac{n(n+1)}{2}$. Let $f$ be a function defined on the set of positive integers such that
1) $f(n)$ is a positive integer for each $n$;
2) $f(uv) = f(u)f(v)$ for any pair $(u, v)$ of coprime numbers;
3) $f(a + b + c) = f(a) + f(b) + f(c)$ for $a, b, c \in \mathbb{T}$.
Prove that $f(n) = n$ for all $n$.
