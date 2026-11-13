---
tag: 1G227PPABQ
kind: problem
type: answer
answer: 1,1,2,1,1,2,2,1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=104464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The following infinite sequence composed of 1s and 2s has an interesting property: starting from the first term, group the same consecutive numbers together, and then write down the number of terms in each group in order. The infinite sequence formed by these numbers is exactly the sequence itself. This sequence is called the Kolakoski sequence. According to this property, continue to write the next 8 terms of this sequence (from the 13th term to the 20th term).
