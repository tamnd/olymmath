---
tag: 2Q1N1NF7YN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 Taiwan TST Round 2
    url: https://artofproblemsolving.com/community/c6h3048204
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1200
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204856
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tw-tst/2023
    source: hf-ai-mo-aops
    label: 2023 Taiwan TST Round 2
---
There is an equilateral triangle $ABC$ on the plane. Three straight lines pass through $A$ , $B$ and $C$ , respectively, such that the intersections of these lines form an equilateral triangle inside $ABC$ . On each turn, Ming chooses a two-line intersection inside $ABC$ , and draws the straight line determined by the intersection and one of $A$ , $B$ and $C$ of his choice. Find the maximum possible number of three-line intersections within $ABC$ after 300 turns.
*Proposed by usjl*
