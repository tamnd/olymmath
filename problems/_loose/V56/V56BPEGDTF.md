---
tag: V56BPEGDTF
kind: problem
type: answer
answer: "7"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=168306
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We construct an $n(n \geq 5)$ unit-edged cube from unit-edged white cubes, and paint the faces of this cube red. Classify the original unit-edged cubes based on the following two criteria:

a) how many red faces they have,

b) whether they have a neighbor (a cube that is connected to them by one face) that has one more red face than they do. How many (non-empty) classes will we thus sort the cubes into, and how many cubes will be in each class?
