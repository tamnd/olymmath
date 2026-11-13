---
tag: GQ3VQEHY5Z
kind: problem
type: answer
answer: 2016^{2}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=89114
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On some fields of a $2017 \times 2017$ board, there is one grasshopper; the other fields are empty. The grasshoppers move on the board, never leaving it, according to the following rules. Each grasshopper moves to an adjacent field every second. Movements are horizontal (to the field to the left or right of the one the grasshopper is on) or vertical (to the field above or below the one the grasshopper is on). A grasshopper that makes a horizontal move in one second must make a vertical move in the next second, and a grasshopper that makes a vertical move in one second must make a horizontal move in the next second.

Determine the smallest number of grasshoppers such that, regardless of their initial arrangement and regardless of their movements, we can be sure that at some point two grasshoppers will be on the same field.
