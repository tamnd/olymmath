---
tag: ZMMXVPYZ0Y
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=239302
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the sum of all primes $p < 50$, for which there exists a function $f \colon \{0, \ldots , p -1\} \rightarrow \{0, \ldots , p -1\}$ such that $p \mid f(f(x)) - x^2$.
