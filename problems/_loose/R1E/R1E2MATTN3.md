---
tag: R1E2MATTN3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=207190
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A government's land with dimensions $n \times n$ are going to be sold in phases. The land is divided into $n^2$ squares with dimension $1 \times 1$. In the first phase, $n$ farmers bought a square, and for each rows and columns there is only one square that is bought by a farmer. After one season, each farmer could buy one more square, with the conditions that the newly-bought square has a common side with the farmer's land and it hasn't been bought by other farmers. Determine all values of n such that the government's land could not be entirely sold within $n$ seasons.
