---
tag: JGJF3KEYKX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1987 ITAMO
    url: https://artofproblemsolving.com/community/c6h1998785
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=45274
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241468
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: it-cesenatico/1987
    source: hf-ai-mo-aops
    label: 1987 ITAMO
---
A square paper of side $n$ is divided into $n^2$ unit square cells. A maze is drawn on the paper with unit walls between some cells in such a way that one can reach every cell from every other cell not crossing any wall. Find, in terms of $n$ , the largest possible total length of the walls.
