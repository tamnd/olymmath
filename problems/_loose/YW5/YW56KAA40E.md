---
tag: YW56KAA40E
kind: problem
type: answer
answer: "56"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20104
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a plane, there are eight different points. A numbering of these points with numbers from 1 to 8 is called good if the following condition is met:

there exists a line such that all points lie on one side of it and at different distances from it, and the distances from the points to this line increase with the increase in the number. That is, the closest point is number 1, the next in distance is number 2, and so on.

What is the maximum number of different good numberings that a given set of eight points can have?
