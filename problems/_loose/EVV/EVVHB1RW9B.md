---
tag: EVVHB1RW9B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2477873
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28068
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228416
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1989 Tournament Of Towns
---
On a square of a chessboard there is a pawn . Two players take turns to move it to another square, subject to the rule that , at each move the distance moved is strictly greater than that of the previous move. A player loses when unable to make a move on his turn. Who wins if the players always choose the best strategy? (The pawn is always placed in the centre of its square. )

( F . L . Nazarov)
