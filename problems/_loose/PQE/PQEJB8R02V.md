---
tag: PQEJB8R02V
kind: problem
type: answer
answer: "60200"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=78219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have 102 distinct gifts. We want to distribute them to 100 winners of a contest, so that each winner receives at least one gift. Let $N$ be the number of ways to do this. Calculate

$$
\frac{N \times 48}{1 \times 2 \times 3 \times \cdots \times 102}
$$
