---
tag: 5DQ14GETSR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Sinapore MO Open
    url: https://artofproblemsolving.com/community/c6h3102143
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1164
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2023
    source: hf-ai-mo-aops
    label: 2023 Sinapore MO Open
---
A grid of cells is tiled with dominoes such that every cell is covered by exactly one domino. A subset $S$ of dominoes is chosen. Is it true that at least one of the following 2 statements is false?
(1) There are $2022$ more horizontal dominoes than vertical dominoes in $S$ .
(2) The cells covered by the dominoes in $S$ can be tiled completely and exactly by $L$ -shaped tetrominoes.
