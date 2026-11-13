---
tag: GX1HHYKP73
kind: problem
type: answer
answer: "No"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0001.parquet#row=264
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 60th Ukrainian National Mathematical Olympiad
---
299 digits $0$ and one digit $1$ are written in a circle. The following moves are allowed:
* from each digit, subtract the sum of the adjacent digits;
* select two digits with exactly two digits between them and increase both by $1$ or decrease both by $1$.

Is it possible to obtain such an arrangement of numbers (after a finite number of such moves), in which there are two adjacent digits $1$, and the rest of the digits are $0$?
