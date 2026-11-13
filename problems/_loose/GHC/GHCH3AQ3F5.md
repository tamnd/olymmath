---
tag: GHCH3AQ3F5
kind: problem
type: answer
answer: "48"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232430
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=197
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the smallest possible number of divisors a positive integer $n$ may have, which satisfies the following conditions:
1. $24 \mid n+1$;
2. The sum of the squares of all divisors of $n$ is divisible by $48$ ($1$ and $n$ are included).
