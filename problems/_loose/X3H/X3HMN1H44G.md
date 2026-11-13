---
tag: X3HMN1H44G
kind: problem
type: answer
answer: All integer pairs a, b with the same parity.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 55rd Ukrainian National Mathematical Olympiad - Third Round
---
Find all integers $a, b$ for which there exist integers $x, y$ such that the following equation holds:
$$
8x^4 + 8y^4 = a^4 + 6a^2b^2 + b^4.
$$
