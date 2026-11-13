---
tag: 18G7KNFY4E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2945604
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34499
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233328
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2019
    source: hf-ai-mo-aops
    label: 2019 Chile National Olympiad
---
Javiera and Claudio play on a board consisting of a row with $2019$ cells. Claudio starts by placing a token anywhere on the board. Next Javiera says a natural number $k$ , $1 \le k \le n$ and Claudio must move the token to the right or to the left at your choice $k$ squares and so on.
Javiera wins if she manages to remove the piece that Claudio moves from the board. Determine the smallest $n$ such that Javiera always wins after a finite number of moves.
