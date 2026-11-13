---
tag: FKV2M4MRMZ
kind: problem
type: answer
answer: f(x) = 1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269050
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f: (0, +\infty)\cap\mathbb{Q}\to (0, +\infty)\cap\mathbb{Q}$ satisfying thefollowing conditions:

- $f(ax) \leq (f(x))^a$, for every $x\in (0, +\infty)\cap\mathbb{Q}$ and $a \in (0, 1)\cap\mathbb{Q}$

- $f(x+y) \leq f(x)f(y)$, for every $x,y\in (0, +\infty)\cap\mathbb{Q}$
