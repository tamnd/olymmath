---
tag: FWBDBZFWR3
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Canadian Mathematical Olympiad Qualification
    url: https://artofproblemsolving.com/community/c6h1258981
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10878
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212853
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ca-cmoqr/2014
    source: hf-ai-mo-aops
    label: 2014 Canadian Mathematical Olympiad Qualification
---
A bug is standing at each of the vertices of a regular hexagon $ABCDEF$ . At the same time each bug picks one of the vertices of the hexagon, which it is not currently in, and immediately starts moving towards that vertex. Each bug travels in a straight line from the vertex it was in originally to the vertex it picked. All bugs travel at the same speed and are of negligible size. Once a bug arrives at a vertex it picked, it stays there. In how many ways can the bugs move to the vertices so that no two bugs are ever in the same spot at the same time?
