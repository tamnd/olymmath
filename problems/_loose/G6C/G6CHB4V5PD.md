---
tag: G6CHB4V5PD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a chessboard with dimensions $8 \times 8$, the digits 0 and 1 are placed in each field in a random manner. The arrangement of the digits can be changed by moves of the following type: with one move, the arrangement of an entire row or an entire column is changed, such that zeros become ones, and ones become zeros. Prove that there exists a sequence of moves such that the board will end up in a state where the sum of the digits in each row and each column is greater than or equal to 4.
