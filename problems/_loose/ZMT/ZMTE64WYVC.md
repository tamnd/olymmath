---
tag: ZMTE64WYVC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077909
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78515
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267362
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $ABCD$ be a square with side length $2015$ . A disk with unit radius is packed neatly inside corner $A$ (i.e. tangent to both $\overline{AB}$ and $\overline{AD}$ ). Alice kicks the disk, which bounces off $\overline{CD}$ , $\overline{BC}$ , $\overline{AB}$ , $\overline{DA}$ , $\overline{DC}$ in that order, before landing neatly into corner $B$ . What is the total distance the center of the disk travelled?

*Proposed by Evan Chen*
