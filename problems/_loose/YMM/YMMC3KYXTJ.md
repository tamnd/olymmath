---
tag: YMMC3KYXTJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h621440
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=768
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=204420
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2023
    source: hf-ai-mo-aops
    label: 2023 India IMO Training Camp
---
For a positive integer $k$ , let $s(k)$ denote the sum of the digits of $k$ . Show that there are infinitely many natural numbers $n$ such that $s(2^n) > s(2^{n+1})$ .
