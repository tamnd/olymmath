---
tag: W9NVP8YZAK
kind: problem
type: answer
answer: T_n > S_n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=268016
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Decide whether $S_n$ or $T_n$ is larger, where
$$S_n = \sum_{k=1}^n \frac{k}{(2n - 2k + 1)(2n - k + 1)}, T_n = \sum_{k=1}^n\frac{1}{k}$$
