---
tag: TTWMERR1Y1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 JBMO Shortlist
    url: https://artofproblemsolving.com/community/c6h1679721
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=26101
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numina-olympiads
    url: https://huggingface.co/datasets/project-numina/olympiads
    capture: hf-numina-olympiads/default/train/0000.parquet#row=11205
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=57
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2017
    source: hf-ai-mo-aops
    label: 2017 JBMO Shortlist
  - at: jbmo-sl/2017
    source: hf-numina-olympiads
    label: JBMO-SL
---
Find all positive integers $n$ such that there exists a prime number $p$ , such that $p^n-(p-1)^n$ is a power of $3$ .

Note. A power of $3$ is a number of the form $3^a$ where $a$ is a positive integer.
