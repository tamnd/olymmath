---
tag: T1MMXTPGFX
kind: problem
type: answer
answer: \frac{n+1}{4}+2^{n}+(-\frac{5}{4}n+\frac{5}{12})3^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=80190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the general term of the sequence defined by $a_{0}=a_{1}=0, a_{n+2}=6 a_{n+1}-9 a_{n}+2^{n}+n$.
