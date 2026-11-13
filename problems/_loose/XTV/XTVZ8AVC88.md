---
tag: XTVZ8AVC88
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish Mathematical Olympiad
---
The sides of triangle $ABC$ have lengths $a, b, c$ which satisfy
$$
\frac{a^6}{2b^3 + 2c^3} + \frac{b^6 + 2b^3c^3 + c^6}{2a^3} + \frac{2a^3b^3 + 2a^3c^3}{a^3 + b^3 + c^3} = a^3 + b^3 + c^3.
$$
Determine if one of the internal angles of triangle $ABC$ can be a right angle or an obtuse angle, or if all internal angles must be acute.
