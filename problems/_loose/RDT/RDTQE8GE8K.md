---
tag: RDTQE8GE8K
kind: problem
type: answer
answer: "20"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=90497
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0000.parquet#row=466
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
At a certain school, there are 6 subjects offered, and a student can take any combination of them. It is noticed that for any two subjects, there are fewer than 5 students taking both of them and fewer than 5 students taking neither. Determine the maximum possible number of students at the school.
