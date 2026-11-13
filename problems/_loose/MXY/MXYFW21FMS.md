---
tag: MXYFW21FMS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=243293
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all real numbers $a > 1$ such that there exists an integer $k \ge 1$ such that the sequence $\{x_n\}_{n\ge 1}$ formed with the first $k$ digits of the number $\lfloor a^n\rfloor$ is periodical.
