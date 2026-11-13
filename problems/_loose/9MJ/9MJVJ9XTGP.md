---
tag: 9MJVJ9XTGP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=165763
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In a class, there are as many boys as there are girls (at least 4 students). We line them up and check if the line can be split into two parts such that in both parts there are as many boys as girls.

Let $a$ denote the number of all such line-ups where such a split is not possible, and $b$ denote the number of those where such a split exists, but only one.

Prove that $b=2a$.
