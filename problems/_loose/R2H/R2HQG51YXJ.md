---
tag: R2HQG51YXJ
kind: problem
type: answer
answer: "no"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina Argentine National Olympiad
  - at: ar-oma/2016
    source: hf-mathnet
    label: Argentina Argentine National Olympiad 2016
---
Given 100 infinitely large boxes with markers in them, the following procedure is carried out. At step 1 one adds one marker in every box. At step 2 one marker is added in every box containing an even number of markers. At step 3 one marker is added in every box in which the number of markers is divisible by 3, and so on.

Before the process starts Bruno wants to distribute several markers in the boxes so that there is at least one marker in each box and the following holds: After any number of steps there exist two boxes containing different number of markers. Decide if this is possible to achieve.
