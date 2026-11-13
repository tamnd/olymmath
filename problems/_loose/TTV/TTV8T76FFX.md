---
tag: TTV8T76FFX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=237153
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let a city be in the form of a square grid which has $n \times n$ cells, each of which contain a skyscraper . At first the $m$ skyscrapers burn, but the fire spreads: everyone skyscraper that has at least two burning neighboring houses (by neighboring houses we mean only houses that border the house along a street, not just at a corner) immediately gets fire. Prove that when in the end the whole city burns down, of must have been $m \ge n$.
