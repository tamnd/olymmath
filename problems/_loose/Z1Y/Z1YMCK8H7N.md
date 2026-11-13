---
tag: Z1YMCK8H7N
kind: problem
type: answer
answer: "103"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=93296
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For a given positive integer $n$, let $p(n)$ denote the product of the non-zero digits of $n$ (if $n$ is a single digit, then $p(n)$ is equal to that digit). If
$$
S=p(1)+p(2)+p(3)+\cdots+p(999),
$$

what is the largest prime factor of $S$?
