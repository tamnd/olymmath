---
tag: R5B0Z6ABRZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h82955
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23010
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224135
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/2003
    source: hf-ai-mo-aops
    label: 2003 IberoAmerican
---
In a square $ABCD$ , let $P$ and $Q$ be points on the sides $BC$ and $CD$ respectively, different from its endpoints, such that $BP=CQ$ . Consider points $X$ and $Y$ such that $X\neq Y$ , in the segments $AP$ and $AQ$ respectively. Show that, for every $X$ and $Y$ chosen, there exists a triangle whose sides have lengths $BX$ , $XY$ and $DY$ .
