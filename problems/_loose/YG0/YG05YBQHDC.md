---
tag: YG05YBQHDC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338794
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73995
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263481
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2008
    source: hf-ai-mo-aops
    label: 2008 Stanford Mathematics Tournament
---
Suppose families always have one, two, or three children, with probability ¼, ½, ¼ respectively. Assuming everyone eventually gets married and has children, what is the probability of a couple having exactly four grandchildren?
