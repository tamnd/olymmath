---
tag: SDMBY22M4D
kind: problem
type: answer
answer: \frac{1}{n+1}\binom{2n}{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=81187
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider this time a large square of side $n$ cut into small squares of side 1. How many ways are there to go from the bottom left corner to the top right corner while staying above the main diagonal?
