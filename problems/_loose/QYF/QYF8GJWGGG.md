---
tag: QYF8GJWGGG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2001 Cuba MO
    url: https://artofproblemsolving.com/community/c6h3399856
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37374
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=107
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cu-mo/2001
    source: hf-ai-mo-aops
    label: 2001 Cuba MO
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Let $M$ be the point of intersection of the diagonals $AC$ and $BD$ of the convex quadrilateral $ABCD$ . Let $ K$ be the intersection point of the extension of side $AB$ (from $A$ ) with the bisector of the $\angle ACD$ . If $MA \cdot MC + MA \cdot CD = MB\cdot MD$ , prove that $\angle BKC = \angle CDB$ .
