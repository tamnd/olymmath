---
tag: T8T4GTNGYQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Balkan MO Shortlist
    url: https://artofproblemsolving.com/community/c6h3557006
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=21352
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Balkan_Mathematical_Olympiad/train/0000.parquet#row=222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: balkan-sl/2024
    source: hf-ai-mo-aops
    label: 2024 Balkan MO Shortlist
  - at: balkan
    source: hf-mathnet
    label: Balkan Mathematical Olympiad 41st Balkan Mathematical Olympiad
---
Let $n$ , $k$ be positive integers. Julia and Florian play a game on a $2n \times 2n$ board. Julia
has secretly tiled the entire board with invisible dominos. Florian now chooses $k$ cells.
All dominos covering at least one of these cells then turn visible. Determine the minimal
value of $k$ such that Florian has a strategy to always deduce the entire tiling.
