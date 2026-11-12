---
tag: HDTBFC16PH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=14200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given a set of positive numbers $a_{1}, a_{2}, \ldots, a_{\mathrm{n}}$, all less than one. Prove that it is impossible to have simultaneously

$a_{1}\left(1-a_{2}\right)>\frac{1}{4}, a_{2}\left(1-a_{3}\right)>\frac{1}{4}, \ldots, a_{n}\left(1-a_{1}\right)>\frac{1}{4}$
