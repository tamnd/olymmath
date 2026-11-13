---
tag: DXS5TWNZFR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h3107478
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=759
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204411
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2023
    source: hf-ai-mo-aops
    label: 2023 India IMO Training Camp
---
In triangle $ABC$ , let $D$ be the foot of the perpendicular from $A$ to line $BC$ . Point $K$ lies inside triangle $ABC$ such that $\angle KAB = \angle KCA$ and $\angle KAC = \angle KBA$ . The line through $K$ perpendicular to like $DK$ meets the circle with diameter $BC$ at points $X,Y$ . Prove that $AX \cdot DY = DX \cdot AY$
