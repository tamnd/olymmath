---
tag: FPYARS2N9G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 JBMO ShortLists
    url: https://artofproblemsolving.com/community/c6h374861
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25871
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226585
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2000
    source: hf-ai-mo-aops
    label: 2000 JBMO ShortLists
---
A triangle $ABC$ is given. Find all the segments $XY$ that lie inside the triangle such that $XY$ and five of the segments $XA,XB, XC, YA,YB,YC$ divide the triangle $ABC$ into $5$ regions with equal areas. Furthermore, prove that all the segments $XY$ have a common point.
