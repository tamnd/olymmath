---
tag: FFDG4C41YF
kind: problem
type: answer
answer: \sum_{k=0}^{\lfloor\frac{n}{3}\rfloor}\binom{n-2k}{k}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=97194
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A person is climbing a staircase with a total of $n$ steps. If it is stipulated that he can only climb 1 step or 3 steps at a time, how many different ways are there to climb the stairs?
