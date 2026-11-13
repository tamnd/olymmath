---
tag: QKM8PNR866
kind: problem
type: answer
answer: cos(sin(sin(…sin(1)…))) with 2000 applications of sin followed by cos
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Brazil/train/0001.parquet#row=111
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: br-obm
    source: hf-mathnet
    label: Brazil XXIII OBM
---
Initially, a calculator displays number $1$. An operation consists in pressing either key $\sin$ or key $\cos$, which calculates respectively the sine and cosine with the arguments in radians. After performing $2001$ operations, what is the greatest possible value that can be achieved?
