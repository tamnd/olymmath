---
tag: CEZS01Z0Z3
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75421
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all pairs of natural numbers $a, b$ for which

$$
n(a, b)+D(a, b)=63
$$

where $n(a, b)$ denotes the least common multiple and $D(a, b)$ the greatest common divisor of the numbers $a, b$.
