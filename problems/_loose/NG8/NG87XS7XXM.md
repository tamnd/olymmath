---
tag: NG87XS7XXM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=162989
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $K$ be a finite subset of integers with $k \geq 3$ elements. We say that numbers $a, b \in K$ are connected if and only if there exist numbers $x_{1}, x_{2}, \ldots, x_{k}$, such that:

- $\left\{x_{1}, x_{2}, \ldots, x_{k}\right\}=K$,
- $x_{1}=a, x_{k}=b$,
- $\left|x_{i}-x_{i+1}\right|$ is an odd number for each $i \in\{1,2, \ldots, k-1\}$.

Prove that in the set $K$ there exist two numbers that are not connected.
