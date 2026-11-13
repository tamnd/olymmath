---
tag: KK1X4Y7CZ8
kind: problem
type: answer
answer: 2018!
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=101388
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are 2019 bags, each containing 2019 beads with a total weight of 1 kilogram. In each bag, the beads are numbered as $1,2, \cdots, 2019$. A selection is called a proper selection if and only if beads with different numbers are chosen from different bags (at most one bead from each bag), and the total weight is at least 1 kilogram. Find the maximum value of $k$ such that there always exist at least $k$ different proper selections.
