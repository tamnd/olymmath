---
tag: FRAYG7KARE
kind: problem
type: answer
answer: "8"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=95327
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a circle, there are several black and white chess pieces. Two people, A and B, play a game: A takes away all black pieces that have adjacent white pieces, then B takes away all white pieces that have adjacent black pieces. They take turns doing this until only one color of pieces remains.
(1) Suppose there are 40 pieces on the circle at the beginning. Can it be possible that after each person takes twice, only one piece remains on the circle?
- (2) Suppose there are 1000 pieces on the circle at the beginning. What is the minimum number of steps required to leave only one piece on the circle?
