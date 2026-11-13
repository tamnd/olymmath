---
tag: A1DN3A4RSS
kind: problem
type: answer
answer: "16"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204534
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given is a cube $3 \times 3 \times 3$ with $27$ unit cubes. In each such cube a positive integer is written. Call a $\textit {strip}$ a block $1 \times 1 \times 3$ of $3$ cubes. The numbers are written so that for each cube, its number is the sum of three other numbers, one from each of the three strips it is in. Prove that there are at least $16$ numbers that are at most $60$.
