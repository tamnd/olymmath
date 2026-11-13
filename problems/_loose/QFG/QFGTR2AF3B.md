---
tag: QFGTR2AF3B
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h2308092
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=20089
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221590
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2021
    source: hf-ai-mo-aops
    label: 2021 Hong Kong TST
---
Find all real triples $(a,b,c)$ satisfying
$$(2^{2a}+1)(2^{2b}+2)(2^{2c}+8)=2^{a+b+c+5}.$$
