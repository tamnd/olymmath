---
tag: RCE97FM1DX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 Bundeswettbewerb Mathematik
    url: https://artofproblemsolving.com/community/c6h609116
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10865
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212841
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: de-bundeswettbewerb/2014
    source: hf-ai-mo-aops
    label: 2014 Bundeswettbewerb Mathematik
---
A line $g$ is given in a plane. $n$ distinct points are chosen arbitrarily from $g$ and are named as $A_1, A_2, \ldots, A_n$ . For each pair of points $A_i,A_j$ , a semicircle is drawn with $A_i$ and $A_j$ as its endpoints. All semicircles lie on the same side of $g$ . Determine the maximum number of points (which are not lying in $g$ ) of intersection of semicircles as a function of $n$ .
