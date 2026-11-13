---
tag: 6RF7RE3FCB
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all natural numbers $n$ such that

$$
\sum_{\substack{d \mid n \\ 1 \leq d<n}} d^{2}=5(n+1)
$$
