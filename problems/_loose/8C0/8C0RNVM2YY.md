---
tag: 8C0RNVM2YY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2024470
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4340
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206524
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 2009 Tournament Of Towns
---
A castle is surrounded by a circular wall with $9$ towers which are guarded by knights during the night. Every hour the castle clock strikes and the guards shift to the neighboring towers, each guard always moves in the same direction (either clockwise or counterclockwise). Given that (i) during the night each knight guards every tower (ii) at some hour each tower was guarded by at least two knights (iii) at some hour exactly $5$ towers were guarded by single knights, prove that at some hour one of the towers was unguarded.
