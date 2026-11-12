---
tag: Z9C6DAY8R0
kind: problem
type: answer
answer: n(1-(\frac{n-1}{n})^{k})
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=33519
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
In $n$ urns, $k$ balls are thrown independently. (For each ball, the probability of it landing in any specific urn is $1 / n$.) Find the expected number of non-empty urns.
