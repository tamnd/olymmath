---
tag: TN26GQH20F
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Caucasus Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1817810
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17435
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219047
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caucasus/2019
    source: hf-ai-mo-aops
    label: 2019 Caucasus Mathematical Olympiad
  - at: journal-kvant/2019
    source: hf-ai-mo-aops
    label: Kvant 2019
---
Pasha placed numbers from 1 to 100 in the cells of the square $10\times 10$ , each number exactly once. After that, Dima considered all sorts of squares, with the sides going along the grid lines, consisting of more than one cell, and painted in green the largest number in each such square (one number could be colored many times). Is it possible that all two-digit numbers are painted green?
