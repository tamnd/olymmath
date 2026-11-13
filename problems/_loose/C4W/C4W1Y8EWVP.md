---
tag: C4W1Y8EWVP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Saint Petersburg Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1504977
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57343
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250133
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-spb/2009
    source: hf-ai-mo-aops
    label: 2009 Saint Petersburg Mathematical Olympiad
---
Call a set of some cells in infinite chess field as board. Set of rooks on the board call as awesome if no one rook can beat another, but every empty cell is under rook attack. There are awesome set with $2008$ rooks and with $2010$ rooks. Prove, that there are awesome set with $2009$ rooks.
