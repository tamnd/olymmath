---
tag: 2JTRHPTV2G
kind: problem
type: answer
answer: "1"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75119
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On the table lie 54 piles of stones with $1,2,3, \ldots, 54$ stones. In each step, we select any pile, say with $k$ stones, and remove it from the table along with $k$ stones from each pile that has at least $k$ stones. For example, after the first step, if we select the pile with 52 stones, the piles remaining on the table will have $1,2,3, \ldots, 51,1$ and 2 stones. Suppose that after a certain number of steps, only one pile remains on the table. Justify how many stones can be in it.
