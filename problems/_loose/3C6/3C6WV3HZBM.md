---
tag: 3C6WV3HZBM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given an integer number $n \ge 3$, show that the number of lists of jointly coprime positive integer numbers that sum to $n$ is divisible by $3$.
(For instance, if $n = 4$, there are six such lists: $(3, 1), (1, 3), (2, 1, 1), (1, 2, 1), (1, 1, 2)$ and $(1, 1, 1, 1)$.)
