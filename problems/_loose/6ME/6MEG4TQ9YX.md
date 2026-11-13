---
tag: 6MEG4TQ9YX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10841
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187249
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1985
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
$\mathrm{P}$ is a point inside the equilateral triangle $\mathrm{ABC}$ such that $\mathrm{PA}=5, \mathrm{~PB}=7, \mathrm{PC}=8$. Find $\mathrm{AB}$.
