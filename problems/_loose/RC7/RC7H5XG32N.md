---
tag: RC7H5XG32N
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206966
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequence $ a_n=\left|z^n+\frac{1}{z^n}\right|\ ,\ n\ge 1$, where $ z\in \mathbb{C}^*$ is given.

i) Prove that if $ a_1>2$, then:

$$ a_{n+1}<\frac{a_n+a_{n+2}}{2}\ ,\ (\forall)n\in \mathbb{N}^*$$

ii) Prove that if there is a $ k\in \mathbb{N}^*$ such that $ a_k\le 2$, then $ a_1\le 2$.
