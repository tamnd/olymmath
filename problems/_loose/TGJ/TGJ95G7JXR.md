---
tag: TGJ95G7JXR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h268966
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3324
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=205533
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2009
    source: hf-ai-mo-aops
    label: 2009 China Team Selection Test
---
Find all complex polynomial $ P(x)$ such that for any three integers $ a,b,c$ satisfying $ a + b + c\not = 0, \frac{P(a) + P(b) + P(c)}{a + b + c}$ is an integer.
