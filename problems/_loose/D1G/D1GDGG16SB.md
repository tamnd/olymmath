---
tag: D1GDGG16SB
kind: problem
type: answer
answer: "114"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=76
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ar-oma
    source: hf-mathnet
    label: Argentina NATIONAL XXX OMA
---
Given a positive integer $N$, we subtract from it its greatest proper divisor (different from $N$), then do the same with the new number and repeat the operation until $1$ is obtained. Find how many subtractions are there if the process starts with $N = 19^{19}$.
