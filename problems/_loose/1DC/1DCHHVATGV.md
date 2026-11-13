---
tag: 1DCHHVATGV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h481153
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6700
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208826
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Kazakhstan National Olympiad
---
We call a square table of a binary, if at each cell is written a single number 0 or 1. The binary table is called regular if each row and each column exactly two units. Determine the number of regular size tables $n\times n$ ( $n> 1$ - given a fixed positive integer). (We can assume that the rows and columns of the tables are numbered: the cases of coincidence in turn, reflect, and so considered different).
