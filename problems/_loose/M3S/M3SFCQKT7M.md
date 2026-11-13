---
tag: M3SFCQKT7M
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254127
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35772
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234256
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
Find all groups of positive integers $ (a,x,y,n,m)$ that satisfy $ a(x^n - x^m) = (ax^m - 4) y^2$ and $ m \equiv n \pmod{2}$ and $ ax$ is odd.
