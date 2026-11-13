---
tag: T2Y4XXHKZV
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
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=140221
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$n$ ones and $n$ zeros form a $2n$-bit binary number. It is required that when scanning from left to right, the cumulative number of 1s is not less than the cumulative number of 0s. Try to find how many numbers satisfy this condition.
