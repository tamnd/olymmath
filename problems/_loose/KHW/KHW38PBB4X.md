---
tag: KHW38PBB4X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: Russian TST 2018
    url: https://artofproblemsolving.com/community/c6h3042616
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=57209
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=250028
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-tst/2018
    source: hf-ai-mo-aops
    label: Russian TST 2018
---
There are 2018 points marked on a sphere. A zebra wants to paint each point white or black and, perhaps, connect some pairs of points of different colors with a segment. Find the residue modulo 5 of the number of ways to do this.
