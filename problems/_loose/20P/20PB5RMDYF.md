---
tag: 20PB5RMDYF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208892
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be a matrix with $r$ rows and $c$ columns. Each entry of $M$ is a nonnegative integer. Let $a$ be the average of all $rc$ entries of $M$. If $r > {(10 a + 10)}^c$, prove that $M$ has two identical rows.
