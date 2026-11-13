---
tag: 1GVG0R5QXK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Peru Iberoamerican Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3068449
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50467
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246101
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-ibero-tst/2007
    source: hf-ai-mo-aops
    label: 2007 Peru Iberoamerican Team Selection Test
---
Each of the squares on a $15$ × $15$ board has a zero. At every step you choose a row or a column, we delete all the numbers from it and then we write the numbers from $1$ to $15$ in the empty cells, in an arbitrary order. find the sum
possible maximum of the numbers on the board that can be achieved after a number finite number of steps.
