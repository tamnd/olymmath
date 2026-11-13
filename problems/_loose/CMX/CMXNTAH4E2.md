---
tag: CMXNTAH4E2
kind: problem
type: answer
answer: \{3, 5, 7, 13\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232317
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all primes $p \ge 3$ such that $p- \lfloor p/q \rfloor q$ is a square-free integer for any prime $q<p$.
