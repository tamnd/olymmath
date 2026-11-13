---
tag: M41X8ZQEXD
kind: problem
type: answer
answer: \frac{3^{10} - 2^{10}}{2 \cdot 3^{10}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261822
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Seven cards numbered $1$ through $7$ lay stacked in a pile in ascending order from top to bottom ($1$ on top, $7$ on bottom). A shuffle involves picking a random card *of the six not currently on top*, and putting it on top. The relative order of all the other cards remains unchanged. Find the probability that, after $10$ shuffles, $6$ is higher in the pile than $3$.
