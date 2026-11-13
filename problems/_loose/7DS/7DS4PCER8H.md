---
tag: 7DS4PCER8H
kind: problem
type: answer
answer: (3, 5)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=232438
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs $(a, b)$ of coprime positive integers, such that $a<b$ and $$b \mid (n+2)a^{n+1002}-(n+1)a^{n+1001}-na^{n+1000}$$ for all positive integers $n$.
