---
tag: B0YNWVCNHM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1883903
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17879
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219454
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2019
    source: hf-ai-mo-aops
    label: 2019 Iran MO (3rd Round)
---
Find all function $f:\mathbb{R}\rightarrow \mathbb{R}$ such that for any three real number $a,b,c$ , if $ a + f(b) + f(f(c)) = 0$ : $$ f(a)^3 + bf(b)^2 + c^2f(c) = 3abc $$ .

*Proposed by Amirhossein Zolfaghari*
