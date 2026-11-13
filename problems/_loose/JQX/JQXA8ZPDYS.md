---
tag: JQXA8ZPDYS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2025 Singapore Junior Math Olympiad
    url: https://artofproblemsolving.com/community/c6h3599770
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59263
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Singapore/train/0000.parquet#row=142
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: sg-smo/2025
    source: hf-ai-mo-aops
    label: 2025 Singapore Junior Math Olympiad
  - at: sg-smo
    source: hf-mathnet
    label: Singapore Singapore Mathematical Olympiad (SMO)
---
Let $ABCD$ be a convex quadrilateral and $M$ be the intersection of its diagonals. Through $M$ draw a line meeting the side $AB$ at $P$ and the side $CD$ at $Q$ . Find all the quadrilaterals so that there exists the segment $PQ$ that divides the triangles $\triangle ABM$ and $\triangle CDM$ into 4 similar triangles.
