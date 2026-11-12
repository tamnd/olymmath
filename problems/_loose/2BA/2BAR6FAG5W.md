---
tag: 2BAR6FAG5W
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=359
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11029
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2003
    source: hf-numina-olympiads
    label: JBMO-SL
---
Let three congruent circles intersect in one point $M$ and $A_{1}, A_{2}$ and $A_{3}$ be the other intersection points for those circles. Prove that $M$ is a.orthocenter for a triangle $A_{1} A_{2} A_{3}$.
