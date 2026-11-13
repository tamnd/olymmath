---
tag: 2V06MEV8AH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=77967
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A grid of size $\mathrm{n} \times \mathrm{n}$ contains $\mathrm{n}^{2}$ cells. Each cell contains a natural number between 1 and $\boldsymbol{n}$, such that each integer in the set $\{1, \ldots, n\}$ appears exactly $\boldsymbol{n}$ times in the grid. Show that there exists a column or a row of the grid containing at least $\sqrt{n}$ different numbers.
