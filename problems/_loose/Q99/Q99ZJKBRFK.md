---
tag: Q99ZJKBRFK
kind: problem
type: answer
answer: "1000"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=23189
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
proposed by A. Shen

There is an infinite one-way strip of cells, numbered with natural numbers, and a bag with ten stones. Initially, there are no stones in the cells of the strip. The following actions are allowed:

- moving a stone from the bag to the first cell of the strip or back;
- if there is a stone in the cell with number $i$, then a stone can be moved from the bag to the cell with number $i+1$ or back.

Is it possible, acting according to these rules, to place a stone in the cell with number $1000 ?$
