---
tag: NM5V2JRPV8
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1998 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h486859
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44162
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240435
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/1998
    source: hf-ai-mo-aops
    label: 1998 Iran MO (3rd Round)
---
A one-player game is played on a $m \times n$ table with $m \times n$ nuts. One of the nuts' sides is black, and the other side of them is white. In the beginning of the game, there is one nut in each cell of the table and all nuts have their white side upwards except one cell in one corner of the table which has the black side upwards. In each move, we should remove a nut which has its black side upwards from the table and reverse all nuts in adjacent cells (i.e. the cells which share a common side with the removed nut's cell). Find all pairs $(m,n)$ for which we can remove all nuts from the table.
