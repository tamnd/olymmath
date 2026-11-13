---
tag: JSGHCTQTDV
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=86172
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a natural number $n>1$, we perform the following operation: if $n$ is even, we divide it by two; if $n$ is odd, we add 5. If the number obtained after this operation is 1, we stop the process; otherwise, we apply the same operation again, and so on. Determine all values of $n$ for which this process is finite, that is, it reaches 1 at some point.
