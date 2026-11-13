---
tag: 4AZ2G2BTPD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h367400
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24998
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225685
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1990
    source: hf-ai-mo-aops
    label: 1990 IMO Longlists
---
$A$ and $B$ are two points in the plane $\alpha$ , and line $r$ passes through points $A, B$ . There are $n$ distinct points $P_1, P_2, \ldots, P_n$ in one of the half-plane divided by line $r$ . Prove that there are at least $\sqrt n$ distinct values among the distances $AP_1, AP_2, \ldots, AP_n, BP_1, BP_2, \ldots, BP_n.$
