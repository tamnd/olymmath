---
tag: A8AH1R7JJ0
kind: problem
type: answer
answer: '{1010,1030,1050,\ldots,1190}'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75347
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We will call a number magical if it can be expressed as the sum of a three-digit number $m$ and a three-digit number $m^{\prime}$ written with the same digits in reverse order. Some magical numbers can be expressed in this way in multiple ways; for example, $1554=579+975=777+777$. Determine all magical numbers that have the most such expressions $m+m^{\prime}$. (The order of $m$ and $m^{\prime}$ is not considered.)
