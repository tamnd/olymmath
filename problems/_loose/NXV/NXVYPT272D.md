---
tag: NXVYPT272D
kind: problem
type: answer
answer: 1100, 1200, 1500, 2200, 2400, 3300, 3600, 4400, 4800, 5500, 6600, 7700, 8800, 9900
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Estonia/train/0000.parquet#row=87
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ee-mo
    source: hf-mathnet
    label: Estonia Estonian Math Competitions
---
Find all four-digit numbers, which after deleting any one digit turn into a three-digit number that is a divisor of the original number.
