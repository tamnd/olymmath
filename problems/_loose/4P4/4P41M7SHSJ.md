---
tag: 4P41M7SHSJ
kind: problem
type: answer
answer: \frac{6^n - 1}{5} \text{ if } 5 \nmid n \text{ and } \frac{6^n + 4}{5} \text{ if } 5 \mid n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224261
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We roll a regular 6-sided dice $n$ times. What is the probabilty that the total number of eyes rolled is a multiple of 5?
