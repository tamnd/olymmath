---
tag: JWA6TBJWJZ
kind: problem
type: answer
answer: (m, n) = (2, 1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Solve the equation for positive integers $m, n$:
$$\left \lfloor \frac{m^2}n \right \rfloor + \left \lfloor \frac{n^2}m \right \rfloor = \left \lfloor \frac mn + \frac nm \right \rfloor +mn$$
