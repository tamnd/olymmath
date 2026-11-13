---
tag: 4XSSP9X3NG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h82947
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=23007
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224132
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
Let $C$ and $D$ be two points on the semicricle with diameter $AB$ such that $B$ and $C$ are on distinct sides of the line $AD$ . Denote by $M$ , $N$ and $P$ the midpoints of $AC$ , $BD$ and $CD$ respectively. Let $O_A$ and $O_B$ the circumcentres of the triangles $ACP$ and $BDP$ . Show that the lines $O_AO_B$ and $MN$ are parallel.
