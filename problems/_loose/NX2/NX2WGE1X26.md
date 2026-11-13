---
tag: NX2WGE1X26
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h2722703
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34323
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/1990
    source: hf-ai-mo-aops
    label: 1990 Chile National Olympiad
---
Find all the odd naturals whose indicator is the same as $1990$ .

We clarify that, if a natural decomposes into prime factors in the form $\Pi_{j=1}^r p_j^{a_j}$ , define the *indicator* as : $\phi (n) = r\Pi_{j=1}^r p_j^{a_j-1} (p_j + 1)$ .
