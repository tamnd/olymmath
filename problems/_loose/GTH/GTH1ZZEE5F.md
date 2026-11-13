---
tag: GTH1ZZEE5F
kind: problem
type: answer
answer: \frac{4^k + 2^k}{3}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217043
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let k be a positive integer. Find the number of non-negative integers n less than or equal to $10^k$ satisfying the following conditions:
(i) n is divisible by 3;
(ii) Each decimal digit of n is one of the digits 2,0,1 or 7.
