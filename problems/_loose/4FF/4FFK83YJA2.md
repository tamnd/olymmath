---
tag: 4FFK83YJA2
kind: problem
type: answer
answer: 1006\cdot2014
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=85329
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a $2014 \times 2014$ board, there is a lamp on each of the $2014^{2}$ squares. Lamps can be on or off. In the initial situation, some of the lamps are on. In a move, you choose a row or column in which at least 1007 lamps are on and change the status of all 2014 lamps in that row or column (from on to off and from off to on). Find the smallest non-negative integer $k$ such that the following holds: from any initial situation, you can reach a situation in a finite number of steps where at most $k$ lamps are on.
