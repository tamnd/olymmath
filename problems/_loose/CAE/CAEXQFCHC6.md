---
tag: CAEXQFCHC6
kind: problem
type: answer
answer: (4,5)(8,25)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85698
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A number is called non-null if it is whole and positive and contains no zeros. You can nullify a positive whole number by simply removing the zeros. We denote this with square brackets, for example $[2050]=25$ and $[13]=13$. For two numbers $a$ and $b$, the following is known:

- $a$ and $b$ are non-null,
- $1<a<b<100$,
- $[a \cdot b]=2$.

Which pairs $(a, b)$ satisfy these three conditions?
