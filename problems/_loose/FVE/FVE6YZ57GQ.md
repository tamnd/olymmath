---
tag: FVE6YZ57GQ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h3231810
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=1796
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00002-of-00003.parquet#row=147847
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2024
    source: hf-ai-mo-aops
    label: 2024 International Zhautykov Olympiad
---
Let $G$ be the centroid of triangle $ABC$ . Find the biggest $\alpha$ such that there exists a triangle for which there are at least three angles among $\angle GAB, \angle GAC, \angle GBA, \angle GBC, \angle GCA, \angle GCB$ which are $\geq \alpha$ .
