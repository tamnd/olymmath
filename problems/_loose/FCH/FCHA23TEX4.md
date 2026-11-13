---
tag: FCHA23TEX4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=82974
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a, b, c$ be three positive integers. Show that

$$
\frac{GCD(a, b, c)^{2}}{GCD(a, b) GCD(a, c) GCD(b, c)}=\frac{LCM(a, b, c)^{2}}{LCM(a, b) LCM(a, c) LCM(b, c)}
$$
