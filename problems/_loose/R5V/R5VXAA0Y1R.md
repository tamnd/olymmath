---
tag: R5VXAA0Y1R
kind: problem
type: answer
answer: a) Yes. b) No.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=102
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma/2015
    source: hf-mathnet
    label: Argentina Argentine National Olympiad 2015
---
We say that a natural number is of type 1 (respectively type 2) if each of its digits at even (respectively odd) position is greater than or equal to each of its adjacent digits. Positions are counted from left to right; leading zeros are not allowed (the first digit is assumed nonzero). One-digit numbers are considered to be both of type 1 and of type 2. Decide if it is true that:

a) Each number $a > 1$ of type 1 can be represented as $a = b + c$ with $b$, $c$ numbers of type 2.

b) Each number $a > 1$ of type 2 can be represented as $a = b + c$ with $b$, $c$ numbers of type 1.
