---
tag: E8RRVDPES1
kind: problem
type: answer
answer: 2^{n}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91106
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n$ be a natural number. Roger has a square garden of size $(2 n+1) \times(2 n+1)$. He erects fences to divide it into rectangular beds. He wants exactly two horizontal $k \times 1$ beds and exactly two vertical $1 \times k$ beds for every even number $k$ between 1 and $2 n+1$, as well as a single square bed of size $1 \times 1$ when he is finished. How many different ways can Roger divide his garden?
