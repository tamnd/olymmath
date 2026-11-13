---
tag: VYK1Q41AVD
kind: problem
type: answer
answer: \lfloor\frac{n}{3}\rfloor
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=79735
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
An art gallery has the shape of a polygon with $n \geq 3$ sides, where the edges do not intersect, and there are no pillars or walls in the middle. Show that regardless of the shape of the gallery, it suffices to have $\left\lfloor\frac{n}{3}\right\rfloor$ guards to monitor it. A point $A$ inside the gallery is considered to be monitored by a guard $G$ if the segment $[A G]$ does not intersect any wall of the gallery.
