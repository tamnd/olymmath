---
tag: 37EPMP2ZJT
kind: problem
appearances:
  - at: pumac/2021/ca4
    primary: true
  - at: pumac/2021/cb6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/PUMaC_2021_Combo_A.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825137
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73279
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are n lilypads in a row labeled $1, 2, \dots, n$ from left to right. Fareniss the Frog picks a lilypad at random to start on, and every second she jumps to an adjacent lilypad; if there are two such lilypads, she is twice as likely to jump to the right as to the left. After some finite number of seconds, there exists two lilypads $A$ and $B$ such that Fareniss is more than $1000$ times as likely to be on $A$ as she is to be on $B$ . What is the minimal number of lilypads $n$ such that this situation must occur?
