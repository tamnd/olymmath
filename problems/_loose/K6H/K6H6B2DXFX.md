---
tag: K6H6B2DXFX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267203
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $$f(n) = \sum_{k=0}^{\lfloor n/2\rfloor}(-1)^k\frac{1}{n-k}\binom{n-k}k,$$ for each positive integer $n$. If $|f(2007) + f(2008)| = a/b$ for relatively prime positive integers $a$ and $b$, find the remainder when $a$ is divded by $1000$.
