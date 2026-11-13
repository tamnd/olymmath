---
tag: 4DBRXFEF9P
kind: problem
type: answer
answer: "50"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=118550
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a $8 \times 8$ piece of land, with two pairs of opposite sides running east-west and north-south, respectively. Divide this land into 64 $1 \times 1$ squares. Build some rooms on this land so that each square has at most one room, and each room occupies only one square.

If a room has rooms on the east, west, and south sides of its square, then it is called a shaded room. How many rooms can be built on this land at most, so that none of the rooms are shaded?
Note: By definition, rooms located on the east, west, and south boundaries are not shaded.
