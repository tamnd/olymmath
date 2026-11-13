---
tag: AWZJVQ2ZTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2024 Romania EGMO TST
    url: https://artofproblemsolving.com/community/c6h2414200
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=53866
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=247525
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-egmo-tst/2024
    source: hf-ai-mo-aops
    label: 2024 Romania EGMO TST
---
Define sequence $a_{0}, a_{1}, a_{2}, \ldots, a_{2018}, a_{2019}$ as below: $
a_{0}=1
$ $a_{n+1}=a_{n}-\frac{a_{n}^{2}}{2019}$ , $n=0,1,2, \ldots, 2018$ Prove $a_{2019} < \frac{1}{2} < a_{2018}$
