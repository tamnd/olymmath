---
tag: BWK2EQFJKV
kind: problem
appearances:
  - at: pumac/2017/na4
    primary: true
  - at: pumac/2017/nb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2017 official paper
    url: https://pumac.princeton.edu/s/PUMaC2017_NT_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1564523
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=15926
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any integer $n \ge 2$ , let $b_n$ be the least positive integer such that, for any integer $N$ , $m$ divides $N$ whenever $m$ divides the digit sum of $N$ written in base $b_n$ , for $2 \le m \le n$ . Find the integer nearest to $b_{36}/b_{25}$ .
