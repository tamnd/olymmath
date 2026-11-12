---
tag: BCYA7MGXQ8
kind: problem
type: answer
answer: for\0<x<500000,\1000x\\faster;\for\x>500000,\\frac{x^2}{1000}\\faster
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=40149
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Which of the two functions

$$
y=1000 x \text { and } y=\frac{x^{2}}{1000}
$$

increases faster as $x$ increases from 0 to $+\infty$?
