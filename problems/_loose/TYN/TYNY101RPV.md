---
tag: TYNY101RPV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80606
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \in \mathbb{N}^{*}$. Among a class of $n$ students numbered from 1 to $n$, some are friends and others are not (the friendship relation is mutual, and one cannot be a friend or not a friend with oneself). Does there exist an integer $N \geqslant 1$ and a way to assign each student an integer (denoted $a_{i}$ for student $i$) such that $i$ and $j$ are friends if and only if $N$ divides $a_{i} a_{j}$?
