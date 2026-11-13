---
tag: PH4TTZKQZF
kind: problem
type: answer
answer: (30,21),(-21,-30)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85339
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=1454
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(x, y)$ of integers that satisfy

$$
x^{2}+y^{2}+3^{3}=456 \sqrt{x-y} .
$$
