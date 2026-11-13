---
tag: DJ37CZKRR0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 Abels Math Contest (Norwegian MO)
    url: https://artofproblemsolving.com/community/c6h2004982
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=49474
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=245270
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: no-abel/1993
    source: hf-ai-mo-aops
    label: 1993 Abels Math Contest (Norwegian MO)
---
Let $ABCD$ be a convex quadrilateral and $A',B'C',D'$ be the midpoints of $AB,BC,CD,DA$ , respectively. Let $a,b,c,d$ denote the areas of quadrilaterals into which lines $A'C'$ and $B'D'$ divide the quadrilateral $ABCD$ (where a corresponds to vertex $A$ etc.). Prove that $a+c = b+d$ .
