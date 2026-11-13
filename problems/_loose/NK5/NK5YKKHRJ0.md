---
tag: NK5YKKHRJ0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1164275
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78537
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267384
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
Farmer John has a (flexible) fence of length $L$ and two straight walls that intersect at a corner perpendicular to each other. He knows that if he doesn't use any walls, he call enclose an maximum possible area of $A_0$ , and when he uses one of the walls or both walls, he gets a maximum of area of $A_1$ and $A_2$ respectively. If $n=\frac{A_1}{A_0}+\frac{A_2}{A_1}$ , find $\lfloor 1000n\rfloor$ .

*Proposed by Yannick Yao*
