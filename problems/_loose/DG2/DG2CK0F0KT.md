---
tag: DG2CK0F0KT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$, let $x_{n}$ denote the number obtained by consecutively writing all natural numbers from 1 to $n$ one after another (e.g., $x_{14}=$ 1234567891011121314). Let the function $f: \mathbb{N} \rightarrow \mathbb{N}_{0}$ be defined as follows: $f(n)$ is the smallest number of digits that need to be removed from the representation of the number $x_{n}$ so that the newly obtained number is divisible by 8 (it is allowed to remove all digits of $x_{n}$, in which case the newly obtained number is considered to be zero). Do there exist natural numbers $t$ and $n_{0}$ such that for all $n \in \mathbb{N}, n \geqslant n_{0}$, it holds that $f(n+t)=f(n) ?$
