---
tag: GKJ5KQE1RP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=189700
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a strictly increasing sequence of natural numbers

$$
a_{0}=1, a_{1}, a_{2}, \ldots
$$

such that for every natural number $n$ it holds that

$$
1+\sum_{j=0}^{n-1} a_{j} \geq a_{n}
$$

Prove that every natural number $N$ can be represented as a sum of several different terms of the sequence (1). Prove that this representation is unique if and only if for every natural number $n$ in (2) the equality sign holds.
