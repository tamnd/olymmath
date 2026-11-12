---
tag: ADRPBFEWT6
kind: problem
type: answer
answer: \frac{\sqrt{2}}{4}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given numbers $x, y \in\left(0, \frac{\pi}{2}\right)$. Find the maximum value of the expression

$$
A=\frac{\sqrt{\cos x \cos y}}{\sqrt{\operatorname{ctg} x}+\sqrt{\operatorname{ctg} y}}
$$
