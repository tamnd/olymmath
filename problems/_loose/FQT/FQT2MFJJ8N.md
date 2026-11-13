---
tag: FQT2MFJJ8N
kind: problem
type: answer
answer: \frac{n!\cdot(n-r)!}{(n-2r)!}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=94387
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $n$ young people and $r$ elderly people, $n>2r$, to be arranged in a row. It is required that each elderly person has a young person on both sides to support them (but each pair of young people only supports one elderly person). How many different arrangements are there?
