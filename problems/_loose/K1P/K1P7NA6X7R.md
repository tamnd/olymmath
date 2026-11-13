---
tag: K1P7NA6X7R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207217
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For every natural number $ n $, define $ s(n) $ as the smallest natural number so that for every natural number $ a $ relatively prime to $n$, this equation holds: $$ a^{s(n)} \equiv 1 (mod n) $$
Find all natural numbers $ n $ such that $ s(n) = 2010 $
