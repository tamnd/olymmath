---
tag: DNDRPJ1SH2
kind: problem
type: answer
answer: (1,5),(1,6),(1,7),(1,8),(2,3),(2,4),(3,2),(4,2),(5,1),(6,1),(7,1),(8,1),(9,1)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75465
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine all pairs $(x, y)$ of integers that are solutions to the inequality

$$
\frac{x}{\sqrt{x}}+\frac{6}{y \sqrt{x}}<\frac{5 \sqrt{y}}{y} .
$$
