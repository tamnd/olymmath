---
tag: NPPM0ZWC1R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Istmo Centroamericano MO
    url: https://artofproblemsolving.com/community/c6h2667242
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=29503
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: istmo/2018
    source: hf-ai-mo-aops
    label: 2018 Istmo Centroamericano MO
---
Let $n> 1$ be an odd integer. On a square surface have been placed $n^2 - 1$ white slabs and a black slab on the center. Two workers $A$ and $B$ take turns removing them, betting that whoever removes black will lose. First $A$ picks a slab; if it has row number $i \ge (n + 1) / 2$ , then it will remove all tiles from rows with number
greater than or equal to $ i$ , while if $i <(n + 1) / 2$ , then it will remove all tiles from the rows with lesser number
or equal to $i$ . Proceed in a similar way with columns. Then $B$ chooses one of the remaining tiles and repeats the
process. Determine who has a winning strategy and describe it.

Note: Row and column numbering is ascending from top to bottom and from left to right.
