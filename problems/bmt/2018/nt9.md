---
tag: CQTCJ71Q35
kind: problem
appearances:
  - at: bmt/2018/nt9
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2018 official paper
    url: https://berkeley.mt/archives/bmt-2018/NTSP18.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2018 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3275447
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70129
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261064
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Compute the following: $$ \sum^{99}_{x=0} (x^2 + 1)^{-1} \,\, (mod \,\, 199) $$ where $x^{-1}$ is the value $0 \le y \le 199$ such that $xy - 1$ is divisible by $199$ .
