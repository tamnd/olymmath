---
tag: 4NQ7ETER7N
kind: problem
type: answer
answer: "65"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=266284
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the number of positive integers $k \le 2018$ for which there exist integers $m$ and $n$ so that $k = 2^m + 2^n$.
For example, $64 = 2^5 + 2^5$, $65 = 2^0 + 2^6$, and $66 = 2^1 + 2^6$.
