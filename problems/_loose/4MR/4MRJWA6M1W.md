---
tag: 4MRJWA6M1W
kind: problem
type: answer
answer: '{ z ∈ ℂ : z = r e^{i 2πk/3}, r ≥ 0, k ∈ {0,1,2} }'
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0003.parquet#row=9
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo
    source: hf-mathnet
    label: Romania Romanian Mathematical Olympiad
---
Determine complex numbers $z$ verifying $z^{3n} + \bar{z}^{3n} \ge 0$, for any non-negative integer $n$.
