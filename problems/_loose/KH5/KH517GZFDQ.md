---
tag: KH517GZFDQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=121228
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given three numbers $5,12,18$. Each operation involves selecting any two of these numbers $a, b$, and replacing them with $\frac{\sqrt{2}}{2}(a+b), \frac{\sqrt{2}}{2}(a-b)$. Can we, after a finite number of operations, end up with the three numbers $3,13,20$?
