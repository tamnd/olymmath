---
tag: STFK3536AQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=75530
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech_Republic/train/0000.parquet#row=68
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cz-sk-mo
    source: hf-mathnet
    label: Czech Republic Czech and Slovak Mathematical Olympiad
---
Given a triangle $ABC$, in which $BC$ is the shortest side. Let the midpoint of $BC$ be $M$. On sides $AB$ and $AC$, determine points $X$ and $Y$ respectively, such that $|BX|=|BC|=|CY|$. Let the intersection of lines $CX$ and $BY$ be $Z$. Show that the line $ZM$ passes through the center of the excircle opposite to side $BC$ of the given triangle.
