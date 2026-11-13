---
tag: 7CVM1XPSDW
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Russia/train/0000.parquet#row=303
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian
    source: hf-mathnet
    label: Russia XLIII Russian mathematical olympiad
---
Initially, a positive integer $N$ is written on the board. At each moment, Misha may choose a number $a > 1$ on the board, remove it, and write down all its positive divisors except $a$ instead. After some time it happened that the board contains $N^2$ numbers. Determine all values of $N$ for which this can happen. (M. Fadin, K. Kovalenko)
