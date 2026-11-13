---
tag: KZ9DZWK6KC
kind: problem
type: answer
answer: 3 \text{ and all positive multiples of } 10
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209559
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integers $b$ such that there exists a positive real number $x$ with $$ \dfrac {1}{b} = \dfrac {1}{\lfloor 2x \rfloor} + \dfrac {1}{\lfloor 5x \rfloor} $$ Here, $\lfloor y \rfloor$ denotes the greatest integer that is less than or equal to $y$.
