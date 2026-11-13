---
tag: 5CYZ3JHN7G
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Azerbaijan Senior NMO
    url: https://artofproblemsolving.com/community/c6h3566442
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=30758
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=72
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: az-mo/2019
    source: hf-ai-mo-aops
    label: 2019 Azerbaijan Senior NMO
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong IMO HK TST
---
Prove that for any $a;b;c\in\mathbb{R^+}$ , we have $$ (a+b)^2+(a+b+4c)^2\geq \frac{100abc}{a+b+c} $$ When does the equality hold?
