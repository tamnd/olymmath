---
tag: S9M9MYNZSE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Kvant 2020
    url: https://artofproblemsolving.com/community/c6h3028915
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26544
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=227097
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: journal-kvant/2020
    source: hf-ai-mo-aops
    label: Kvant 2020
---
There are $m$ identical two-pan weighting scales. One of them is broken and it shows any outcome, at random. The other scales always show the correct outcome. Moreover, the weight of the broken scale differs from those of the other scales, which are all equal. At a move, we may choose a scale and place some of the other scales on its pans. Determine the greatest value of $m$ for which we may find the broken scale with no more than three moves.

*Proposed by A. Gribalko and O. Manzhina*
