---
tag: 23BAK4CKCB
kind: problem
type: answer
answer: "49999"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85534
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Netherlands/train/0000.parquet#row=253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nl-nwo-r2
    source: hf-mathnet
    label: Netherlands Second Round
---
The digit sum of a number is obtained by adding the digits of the number. The digit sum of 1303, for example, is $1+3+0+3=7$.

Find the smallest positive integer $n$ for which the digit sum of $n$ and the digit sum of $n+1$ are both divisible by 5.
