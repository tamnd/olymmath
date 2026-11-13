---
tag: 3QK7FHW8SJ
kind: problem
type: answer
answer: (f(n), g(n)) = (an^2 + 2bn + c, an + b)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250740
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all functions $f,g : N \to N$ such that for all $m ,n \in N$ the following relation holds: $$f(m ) - f(n) = (m - n)(g(m) + g(n))$$.
Note: $N = \{0,1,2,...\}$
