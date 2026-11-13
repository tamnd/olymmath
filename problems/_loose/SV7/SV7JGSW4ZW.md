---
tag: SV7JGSW4ZW
kind: problem
type: answer
answer: "81"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210342
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Sherry starts at the number 1. Whenever she's at 1, she moves one step up (to 2). Whenever she's at a number strictly between 1 and 10, she moves one step up or one step down, each with probability $\frac{1}{2}$. When she reaches 10, she stops. What is the expected number (average number) of steps that Sherry will take?
