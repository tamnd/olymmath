---
tag: P01RHNMY3M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254118
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35768
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234253
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
Given triangle $ ABC$ and $ AB=c$ , $ AC=b$ and $ BC=a$ satisfying $ a \geq b \geq c$ , $ BE$ and $ CF$ are two interior angle bisectors. $ P$ is a point inside triangle $ AEF$ . $ R$ and $ Q$ are the projections of $ P$ on sides $ AB$ and $ AC$ .

Prove that $ PR + PQ + RQ < b$ .
