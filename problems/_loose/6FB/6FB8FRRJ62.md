---
tag: 6FB8FRRJ62
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $S$ be the set of all positive integers $n$ satisfying the following two conditions:
$\bullet$ $n$ is relatively prime to all positive integers less than or equal to $\frac{n}{6}$
$\bullet$ $2^n \equiv 4$ mod $n$
What is the sum of all numbers in $S$?
