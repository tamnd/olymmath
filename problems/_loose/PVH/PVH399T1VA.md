---
tag: PVH399T1VA
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=8220
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given numbers $x, y, z \in\left[0, \frac{\pi}{2}\right]$. Find the minimum value of the expression

$$
A=\cos (x-y)+\cos (y-z)+\cos (z-x)
$$
