---
tag: JFA3VP46JN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=10891
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=187295
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1995
    source: hf-numina-olympiads
    label: IberoAmerican_MO
---
$\mathrm{ABCD}$ is an $\mathrm{n} \mathrm{x}$ board. We call a diagonal row of cells a positive diagonal if it is parallel to AC. How many coins must be placed on an $\mathrm{n} x \mathrm{n}$ board such that every cell either has a coin or is in the same row, column or positive diagonal as a coin?
