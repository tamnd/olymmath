---
tag: MMTYN3RA9N
kind: problem
type: answer
answer: 2^{n+1}-2
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=109806
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each of the $n^{2}$ nodes of an $(n-1) \times(n-1)$ grid, color it either red or blue. Find the number of different coloring schemes such that each cell in the grid has exactly two red vertices. Here, two coloring schemes are considered different if there is at least one vertex that is colored differently in the two schemes.
