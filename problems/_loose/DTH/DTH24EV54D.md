---
tag: DTH24EV54D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine whether there exists an infinite sequence $\left(a_{n}\right)_{n \in \mathbb{N}}$ of strictly positive integers satisfying the following two properties:

1. Every strictly positive integer appears exactly once in the sequence;
2. For every integer $n \geqslant 1, \prod_{i=1}^{n} a_{i}$ can be written as an $n$-th power of an integer.
