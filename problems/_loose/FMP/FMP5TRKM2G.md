---
tag: FMP5TRKM2G
kind: problem
type: answer
answer: N \ge 401841
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220049
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The number $2019$ is written on a blackboard. Every minute, if the number $a$ is written on the board, Evan erases it and replaces it with a number chosen from the set
$$ \left\{ 0, 1, 2, \ldots, \left\lceil 2.01 a \right\rceil \right\} $$
uniformly at random. Is there an integer $N$ such that the board reads $0$ after $N$ steps with at least $99\%$ probability?
