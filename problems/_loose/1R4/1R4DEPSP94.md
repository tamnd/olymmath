---
tag: 1R4DEPSP94
kind: problem
type: answer
answer: a_3 - 3a_2 + 3a_1 - a_0 \geq 0
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242241
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For $ t\geq 0$, let $ a_n=\int_0^ t e^{nx}\ dx\ (n=0,\ 1,\ 2,\ 3)$.

(1) Show that $ a_3-3a_2+3a_1-a_0\geq 0$.

(2) Show that $ e^ta_0+(e^t-1)a_1-a_2\geq 0$.
