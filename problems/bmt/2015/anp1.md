---
tag: VYK1FJGHHY
kind: problem
appearances:
  - at: bmt/2015/anp1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2015 official paper
    url: https://berkeley.mt/archives/bmt-2015/AnaS2015.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2761901
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69897
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $z_0,z_1,\ldots,z_{n-1}$ are complex numbers such that $z_k=e^{2k\pi i/n}$ for $k=0,1,2,\ldots,n-1$ . Prove that for any complex number $z$ , $\sum_{k=0}^{n-1}|z-z_k|\ge n$ .
