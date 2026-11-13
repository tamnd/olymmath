---
tag: JYTYB5ERC3
kind: problem
type: answer
answer: (k-1) \prod_{i=1}^k a_i - \sum_{i=1}^k \prod_{j \neq i} a_j
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245963
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_{1}, a_{2}, \cdots, a_{k}$ be relatively prime positive integers. Determine the largest integer which cannot be expressed in the form $$x_{1}a_{2}a_{3}\cdots a_{k}+x_{2}a_{1}a_{3}\cdots a_{k}+\cdots+x_{k}a_{1}a_{2}\cdots a_{k-1}$$ for some nonnegative integers $x_{1}, x_{2}, \cdots, x_{k}$.
