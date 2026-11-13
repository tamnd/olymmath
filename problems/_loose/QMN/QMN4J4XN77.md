---
tag: QMN4J4XN77
kind: problem
type: answer
answer: 2(n+1)forevenn,2(n+3)foroddn
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=161850
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A circle is divided into $2 n$ equal arcs by $2 n$ points $A_{1}, A_{2}, A_{3}, \ldots, A_{2 n}$. A chip is placed at point $A_{1}$. It is allowed to move the chip either to an adjacent point or to the diametrically opposite point. How many ways are there to visit all $2 n$ points exactly once and return to point $A_{1}$?
