---
tag: 7VXQ04WJB0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=183592
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From the two-digit prime numbers 13, 17, 37, 79, one obtains prime numbers again by swapping their digits, thus forming the numbers 31, 71, 73, 97. Similarly, with the prime number 131, one can permute the digits in any way, thus forming the numbers 113, 311, without losing the prime property.

Investigate whether there are three-digit prime numbers with pairwise different digits, such that all possible digit permutations always yield three-digit prime numbers!

(Without using the number table)
