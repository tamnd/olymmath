---
tag: WXJZ5JNRBH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1968 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h368388
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25167
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225900
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1968
    source: hf-ai-mo-aops
    label: 1968 IMO Shortlist
---
Given $n \ (n \geq 3)$ points in space such that every three of them form a triangle with one angle greater than or equal to $120^\circ$ , prove that these points can be denoted by $A_1,A_2, \ldots,A_n$ in such a way that for each $i, j, k, 1 \leq i < j < k \leq n$ , angle $A_iA_jA_k$ is greater than or equal to $120^\circ . $
