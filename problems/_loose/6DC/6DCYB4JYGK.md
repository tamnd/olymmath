---
tag: 6DCYB4JYGK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=242864
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Baltic_Way/train/0001.parquet#row=159
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: baltic-way-sl/2015
    source: hf-mathnet
    label: Baltic Way Baltic Way 2015 Shortlisted Problems
---
Given real positive numbers $a, b, c$ and $d$, for which the equalities $a^2 + ab + b^2 = 3c^2$ and $a^3 + a^2b + ab^2 + b^3 = 4d^3$ are fulfilled. Prove that $$a + b + d \le 3c.$$
