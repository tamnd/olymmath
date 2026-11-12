---
tag: 3BSFHSZCRN
kind: problem
type: answer
answer: \frac{2^{n-1}}{C_{2n-2}^{n-1}}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=10737
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
(4b, 8-11) In a building with $n$ floors and two staircases leading from the first to the last floor, there is a door on each intermediate landing between any two floors (you can go from the staircase to the floor even if the door is locked). The caretaker decided that too many open doors is bad and locked exactly half of the doors, choosing them at random. What is the probability that one can get from the first floor to the last, passing only through open doors?
