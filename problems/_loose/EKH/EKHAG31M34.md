---
tag: EKHAG31M34
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=264484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A large gathering of people stand in a triangular array with $2020$ rows, such that the first row has $1$ person, the second row has $2$ people, and so on. Every day, the people in each row infect all of the people adjacent to them in their own row. Additionally, the people at the ends of each row infect the people at the ends of the rows in front of and behind them that are at the same side of the row as they are. Given that two people are chosen at random to be infected with COVID at the beginning of day 1, what is the earliest possible day that the last uninfected person will be infected with COVID?

*Proposed by Richard Chen*
