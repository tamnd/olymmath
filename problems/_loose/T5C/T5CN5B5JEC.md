---
tag: T5CN5B5JEC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h390408
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=5923
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208073
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2010 Tournament Of Towns
---
Karlson and Smidge divide a cake in a shape of a square in the following way. First, Karlson places a candle on the cake (chooses some interior point). Then Smidge makes a straight cut from the candle to the boundary in the direction of his choice. Then Karlson makes a straight cut from the candle to the boundary in the direction perpendicular to Smidge's cut. As a result, the cake is split into two pieces; Smidge gets the smaller one. Smidge wants to get a piece which is no less than a quarter of the cake. Can Karlson prevent Smidge from getting the piece of that size?
