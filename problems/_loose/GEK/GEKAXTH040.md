---
tag: GEKAXTH040
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 1
    url: https://artofproblemsolving.com/community/c6h3033415
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1187
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204843
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 1
---
There are $n$ cities on each side of Hung river, with two-way ferry routes between some pairs of cities across the river. A city is "convenient" if and only if the city has ferry routes to all cities on the other side. The river is "clear" if we can find $n$ different routes so that the end points of all these routes include all $2n$ cities.

It is known that Hung river is currently unclear, but if we add any new route, then the river becomes clear. Determine all possible values for the number of convenient cities.
*Proposed by usjl*
