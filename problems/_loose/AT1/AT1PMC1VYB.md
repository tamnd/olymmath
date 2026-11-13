---
tag: AT1PMC1VYB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h597370
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11229
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213174
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2014
    source: hf-ai-mo-aops
    label: 2014 India IMO Training Camp
---
Find all positive integers $x$ and $y$ such that $x^{x+y}=y^{3x}$ .
