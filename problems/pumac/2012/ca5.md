---
tag: 58FMA5CQS1
kind: problem
appearances:
  - at: pumac/2012/ca5
    primary: true
  - at: pumac/2012/cb7
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_CombinatoricsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1927383
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8564
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
$5$ people stand in a line facing one direction. In every round, the person at the front moves randomly to any position in the line, including the front or the end. Suppose that $\frac{m}{n}$ is the expected number of rounds needed for the last person of the initial line to appear at the front of the line, where $m$ and $n$ are relatively prime positive integers. What is $m + n$ ?
