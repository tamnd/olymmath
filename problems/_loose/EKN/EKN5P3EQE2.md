---
tag: EKN5P3EQE2
kind: problem
type: answer
answer: \frac{5}{9}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=106242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two players, A and B, take turns rolling a die, with A rolling first, then B, and so on. After a roll, if the sum of the last three rolls is a multiple of 2, and the sum of the last two rolls is not a multiple of 3, the game ends and A wins. If the sum of the last two rolls is a multiple of 3, and the sum of the last three rolls is not a multiple of 2, the game also ends and B wins. In all other cases, the game continues. Find the probability that B wins.
Note: If the number of rolls is less than three, the sum of the "last three" rolls is not a multiple of 2.
