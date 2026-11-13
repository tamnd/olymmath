---
tag: 6T9DR4RX6C
kind: problem
type: answer
answer: a) Every nice number is divisible by five. b) Yes, there are infinitely many nice numbers.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Belarus/train/0001.parquet#row=84
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: by-mo
    source: hf-mathnet
    label: Belarus Belarusian Mathematical Olympiad
---
A positive integer is called *nice* if it is equal to the sum of the fourth powers of certain five distinct its divisors. (A divisor may be equal to $1$ or to the number itself.)

a) Prove that any nice number is divisible by $5$.

b) Are there infinitely many nice numbers?
