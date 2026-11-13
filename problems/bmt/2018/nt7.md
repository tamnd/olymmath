---
tag: 5ARD5V29PF
kind: problem
appearances:
  - at: bmt/2018/nt7
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
    url: https://artofproblemsolving.com/community/c6h3275440
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70124
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261059
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine the number of ordered triples $(a, b, c)$ , with $0 \le a, b, c \le 10$ for which there exists $(x, y)$ such that $ax^2 + by^2 \equiv c$ (mod $11$ )
