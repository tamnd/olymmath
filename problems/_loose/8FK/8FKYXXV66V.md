---
tag: 8FKYXXV66V
kind: problem
type: answer
answer: "79200"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261591
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A *Beaver-number* is a positive 5 digit integer whose digit sum is divisible by 17. Call a pair of *Beaver-numbers* differing by exactly $1$ a *Beaver-pair*. The smaller number in a *Beaver-pair* is called an *MIT Beaver*, while the larger number is called a *CIT Beaver*. Find the positive difference between the largest and smallest *CIT Beavers* (over all *Beaver-pairs*).
