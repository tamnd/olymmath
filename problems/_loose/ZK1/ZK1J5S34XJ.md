---
tag: ZK1J5S34XJ
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=73415
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a $6 \times 6$ toy board, each cell represents a light button. When someone presses a button, it turns on if it is off and turns off if it is on. In addition, all buttons that share a side with a pressed button also change their state: from on to off or from off to on. Starting with all buttons off and pressing each button on the board once, one at a time and in any order, how many buttons will be on at the end?
