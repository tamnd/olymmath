---
tag: BJJG41ADR8
kind: problem
type: answer
answer: \frac{1}{54}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=134417
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
B1 A bug moves in the coordinate plane, starting at $(0,0)$. On the first turn, the bug moves one unit up, down, left, or right, each with equal probability. On subsequent turns the bug moves one unit up, down, left, or right, choosing with equal probability among the three directions other than that of its previous move. For example, if the first move was one unit up then the second move has to be either one unit down or one unit left or one unit right.

After four moves, what is the probability that the bug is at $(2,2)$ ?
