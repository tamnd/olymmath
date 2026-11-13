---
tag: F7GQ7B7BJC
kind: problem
type: answer
answer: "549"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161351
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a natural number $n$, we say it is convenient if the digits that participate in its notation can be divided into two groups such that the sums of the digits in those groups are equal to each other (for example, the number 121 is convenient because we can put the two ones in one group and the digit 2 in the other, and then $1+1=2$; the number 2019 is not convenient because, with any partition, the group containing the digit 9 will have a larger sum than the other group).

a) Determine the smallest natural number $n$ such that both numbers $n$ and $n+1$ are convenient.

b) Do there exist three consecutive natural numbers that are all convenient?
