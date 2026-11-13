---
tag: V8RK6DGYJ0
kind: problem
type: answer
answer: a^2 + b^2 + c^2 \ge 3(a + b + c)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $a, b, c \in [-1, 1]$ satisfy $a + b + c + abc = 0$, prove that $a^2 + b^2 + c^2 \ge 3(a + b + c)$ .
When does the equality hold?
