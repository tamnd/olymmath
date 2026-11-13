---
tag: DAQKM38CWS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h481145
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6694
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Kazakhstan National Olympiad
---
Given a positive integer $n$ . Prove the inequality $\sum\limits_{i=1}^{n}\frac{1}{i(i+1)(i+2)(i+3)(i+4)}<\frac{1}{96}$
