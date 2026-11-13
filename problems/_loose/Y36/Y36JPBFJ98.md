---
tag: Y36JPBFJ98
kind: problem
type: answer
answer: \frac{AB + AC + BC}{2}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260382
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $M$ be the midpoint of side $BC$ of triangle $ABC$ ($AB>AC$), and let $AL$ be the bisector of the angle $A$. The line passing through $M$ perpendicular to $AL$ intersects the side $AB$ at the point $D$. Prove that $AD+MC$ is equal to half the perimeter of triangle $ABC$.
