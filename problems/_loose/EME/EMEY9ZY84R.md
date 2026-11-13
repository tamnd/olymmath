---
tag: EMEY9ZY84R
kind: problem
type: answer
answer: "1122"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=253680
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $(x_1,x_2,\dots,x_{100})$ be a permutation of $(1,2,...,100)$. Define $$S = \{m \mid m\text{ is the median of }\{x_i, x_{i+1}, x_{i+2}\}\text{ for some }i\}.$$ Determine the minimum possible value of the sum of all elements of $S$.
