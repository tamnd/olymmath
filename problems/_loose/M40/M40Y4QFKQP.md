---
tag: M40Y4QFKQP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=91297
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a board with odd side lengths that is divided into unit squares. The board without a corner square is somehow covered with dominoes. You can now move a domino lengthwise by one in one move, so that the previously empty square is covered, but a new one (two squares away from it) becomes free. Prove that the empty square can be moved to any corner of the board in a sequence of moves.

Note: A domino consists of two unit squares with a common side.
