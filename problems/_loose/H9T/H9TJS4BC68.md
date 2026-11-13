---
tag: H9TJS4BC68
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90638
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0008.parquet#row=369
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Aerith writes 100 positive numbers on a blackboard. Every minute, Bob either replaces one number $x$ with $\frac{1}{x}$, or replaces two numbers $x, y$ with $\frac{x y+1}{x+y}$. Given that after 2021 minutes, there is only one number left, show that this number only depends on Aerith's initial numbers.
