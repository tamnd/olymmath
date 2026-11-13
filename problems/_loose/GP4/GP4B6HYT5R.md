---
tag: GP4B6HYT5R
kind: problem
type: answer
answer: "2023"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261595
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define
$$
S = \tan^{-1}(2020) + \sum_{j = 0}^{2020} \tan^{-1}(j^2 - j + 1).
$$
Then $S$ can be written as $\frac{m \pi}{n}$, where $m$ and $n$ are relatively prime positive integers. Find $m + n$.
