---
tag: 610HH8YDDK
kind: problem
type: answer
answer: f(n) \in \{n-1, n, n+1\}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250834
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f : Z^+ \to Z^+$ such that $n^3 - n^2 \le f(n) \cdot (f(f(n)))^2 \le n^3 + n^2$ for every $n$ in positive integers
