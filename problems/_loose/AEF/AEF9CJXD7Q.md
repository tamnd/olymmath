---
tag: AEF9CJXD7Q
kind: problem
type: answer
answer: 2^{1999}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given 2000 segments, each of which is at least 1 unit long. No matter which of them we choose, a polygon cannot be constructed from them. Show that the total length of the segments is at least $2^{1999}$.
