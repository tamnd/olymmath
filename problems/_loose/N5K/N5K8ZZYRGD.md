---
tag: N5K8ZZYRGD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1886109
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17881
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219456
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
We are given a natural number $d$ . Find all open intervals of maximum length $I \subseteq R$ such that for all real numbers $a_0,a_1,...,a_{2d-1}$ inside interval $I$ , we have that the polynomial $P(x)=x^{2d}+a_{2d-1}x^{2d-1}+...+a_1x+a_0$ has no real roots.
