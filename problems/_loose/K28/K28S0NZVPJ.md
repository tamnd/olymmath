---
tag: K28S0NZVPJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 USEMO
    url: https://artofproblemsolving.com/community/c6h2120323
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=74368
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263788
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: usemo/2019
    source: hf-ai-mo-aops
    label: 2019 USEMO
---
Prove that for any prime $p,$ there exists a positive integer $n$ such that
$$1^n+2^{n-1}+3^{n-2}+\cdots+n^1\equiv 2020\pmod{p}.$$
*Robin Son*
