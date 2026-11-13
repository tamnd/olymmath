---
tag: YZMFEYDND9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=177458
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A$ be a set of natural numbers with no zeroes in their decimal representation. It is known that if $a=\overline{a_{1} a_{2} \ldots a_{k}} \in A$, then $b=\overline{b_{1} b_{2} \ldots b_{k}}$, where $b_{j}, 1 \leq j \leq k$ is the remainder of $3 a_{j}$ modulo 10, belongs to $A$ and the sum of the digits of $b$ equals the sum of the digits of $a$.

a) Prove that the sum of the digits of a $k$-digit number in $A$ equals $5 k$.
b) Find the smallest $k$-digit number which could be an element of $A$.
