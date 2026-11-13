---
tag: 9A5K6W2DCP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2966862
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50631
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2006
    source: hf-ai-mo-aops
    label: 2006 Peru MO (ONEM)
---
In each of the squares of an $n \times n$ board, with $n \ge 3$ , a positive integer is written in such a way that the absolute value of the difference of the numbers written in any two neighboring cells is less than or equal to $2$ (two neighboring cells are those that have a common side).
a) Show a $5 \times 5$ board on which $15$ integers have been written different following the indicated rule.
b) Find, as a function of $n$ , the maximum number of different numbers that can have the board of $n \times n$ squares.
