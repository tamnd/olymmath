---
tag: M8QPV37HR0
kind: problem
appearances:
  - at: bmt/2018/nt3
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
    url: https://artofproblemsolving.com/community/c6h3275430
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70120
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261055
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the minimal $N$ such that any $N$ -element subset of $\{1, 2, 3, 4,...,7\}$ has a subset $S$ such that the sum of elements of $S$ is divisible by $7$ .
