---
tag: ECYG04AZKD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h3058679
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55939
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249340
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2023
    source: hf-ai-mo-aops
    label: 2023 All-Russian Olympiad
---
Given a trapezoid $ABCD$ , in which $AD \parallel BC$ , and rays $AB$ and $DC$ intersect at point $G$ . The common external tangents to the circles $(ABC), (ACD)$ intersect at point $E$ . The common external tangents to circles $(ABD), (CBD)$ meet at $F$ . Prove that the points $E, F$ and $G$ are collinear.
