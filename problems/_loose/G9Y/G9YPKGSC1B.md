---
tag: G9YPKGSC1B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Peru MO (ONEM)
    url: https://artofproblemsolving.com/community/c6h2967180
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50651
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246262
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Peru MO (ONEM)
---
A domino is a $1 \times 2$ (or 2 $\times 1$ ) rectangular piece; namely, made up of two squares. There is an $8 \times 8$ board such that each domino can be cover exactly two of its squares. John places $n$ dominoes on the board, so that each one covers exactly two squares of the board and it is no longer possible to place a piece more without overlapping with any of those already placed. Determine the smallest value of $n$ for which the described situation is possible.
