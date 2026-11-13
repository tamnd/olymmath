---
tag: Q5KAFR44JM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h603642
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11600
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213557
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2014
    source: hf-ai-mo-aops
    label: 2014 NIMO Problems
---
Aaron takes a square sheet of paper, with one corner labeled $A$ . Point $P$ is chosen at random inside of the square and Aaron folds the paper so that points $A$ and $P$ coincide. He cuts the sheet along the crease and discards the piece containing $A$ . Let $p$ be the probability that the remaining piece is a pentagon. Find the integer nearest to $100p$ .

*Proposed by Aaron Lin*
