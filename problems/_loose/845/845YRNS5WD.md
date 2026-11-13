---
tag: 845YRNS5WD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 CMIMC
    url: https://artofproblemsolving.com/community/c6h1774543
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17549
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219150
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2019
    source: hf-ai-mo-aops
    label: 2019 CMIMC
---
Points $A$ , $B$ , and $C$ lie in the plane such that $AB=13$ , $BC=14$ , and $CA=15$ . A peculiar laser is fired from $A$ perpendicular to $\overline{BC}$ . After bouncing off $BC$ , it travels in a direction perpendicular to $CA$ . When it hits $CA$ , it travels in a direction perpendicular to $AB$ , and after hitting $AB$ its new direction is perpendicular to $BC$ again. If this process is continued indefinitely, the laser path will eventually approach some finite polygonal shape $T_\infty$ . What is the ratio of the perimeter of $T_\infty$ to the perimeter of $\triangle ABC$ ?
