---
tag: DAVDYX31GP
kind: problem
type: answer
answer: "93"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238891
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$, let $n'$ denote the number obtained by deleting zero digits, if any. (For example, if $n = 260$, $n' = 26$, if $n = 2020$, $n' = 22$.),Find the number of $3$-digit numbers $n$ for which $n'$ is a divisor of $n$, different from $n$.
