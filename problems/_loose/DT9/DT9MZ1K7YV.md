---
tag: DT9MZ1K7YV
kind: problem
type: answer
answer: (B)(30,40)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=192881
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A dot starts at $(20,19)$. It can move one unit vertically or horizontally to one of the points $(21,19),(19,19),(20,20)$, or $(20,18)$. From there it can move two units in either direction that is perpendicular to the first move. All moves thereafter increase in length by one unit (three units, four units, five units, etc.) and must be perpendicular to the direction of the previous move. The dot stops after ten moves. Which of the following final locations is not possible?
(A) $(27,33)$
(B) $(30,40)$
(C) $(21,21)$
(D) $(42,44)$
(E) $(37,37)$
