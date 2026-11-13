---
tag: 5XKKDKRYTE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246223
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a positive integer $n$, let $M$ be the set of all points in space with integer coordinates $(a, b, c)$ such that $0 \le a, b, c \le n$. A frog must go to the point $(0, 0, 0)$ to the point $(n, n, n)$ according to the following rules:

$\bullet$ The frog can only jump to points of M.

$\bullet$ In each jump, the frog can go from point $(a, b, c)$ to one of the following points: $(a + 1, b, c)$, $(a, b + 1, c)$, $(a, b, c + 1)$, or $(a, b, c - 1)$.

$\bullet$ The frog cannot pass through the same point more than once.

In how many different ways can the frog achieve its goal?
