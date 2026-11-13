---
tag: PGKGXDVDQH
kind: problem
appearances:
  - at: bmt/2013/dp2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2013 official paper
    url: https://berkeley.mt/archives/bmt-2013/DisS2013.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751520
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69760
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260696
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be an odd prime, and let $(p^p)!=mp^k$ for some positive integers $m$ and $k$ . Find in terms of $p$ the number of ordered pairs $(m,k)$ satisfying $m+k\equiv0\pmod p$ .
