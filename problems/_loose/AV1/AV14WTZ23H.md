---
tag: AV14WTZ23H
kind: problem
type: answer
answer: "512"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=56039
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A strip of $1 \times 10$ is divided into unit squares. The numbers $1, 2, \ldots, 10$ are written in the squares. First, the number 1 is written in one of the squares, then the number 2 is written in one of the adjacent squares, then the number 3 is written in one of the adjacent squares to the already occupied ones, and so on (arbitrary are the choice of the first square and the choice of the neighbor at each step). In how many ways can this be done?
