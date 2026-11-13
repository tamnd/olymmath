---
tag: GBGBV0BRF5
kind: problem
type: answer
answer: 4045 * 2^2025 + 6
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Bulgaria/train/0001.parquet#row=229
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: bg-winter
    source: hf-mathnet
    label: Bulgaria Bulgarian Winter Tournament
---
Find $A_{2024}$, where
$$
A_n = 1 \cdot 2 + 3 \cdot 4 + 5 \cdot 8 + \dots + (2n-1) \cdot 2^n.
$$
