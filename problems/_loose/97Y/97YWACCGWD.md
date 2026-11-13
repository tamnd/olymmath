---
tag: 97YWACCGWD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2097794
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28449
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228484
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1998 Tournament Of Towns
---
A "labyrinth" is an $8 \times 8$ chessboard with walls between some neighboring squares. If a rook can traverse the entire board without jumping over the walls, the labyrinth is "good" ; otherwise it is "bad" . Are there more good labyrinths or bad labyrinths?

(A Shapovalov)
