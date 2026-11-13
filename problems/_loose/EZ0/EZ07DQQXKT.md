---
tag: EZ07DQQXKT
kind: problem
type: answer
answer: n = 6k
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217687
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We have an $n \times n$ square divided into unit squares. Each side of unit square is called unit segment. Some isoceles right triangles of hypotenuse $2$ are put on the square so all their vertices are also vertices of unit squares. For which $n$ it is possible that every unit segment belongs to exactly one triangle(unit segment belongs to a triangle even if it's on the border of the triangle)?
