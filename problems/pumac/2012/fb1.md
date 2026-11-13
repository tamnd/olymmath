---
tag: RM8HV5ES17
kind: problem
appearances:
  - at: pumac/2012/fb1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2012 official paper
    url: https://pumac.princeton.edu/s/PUMaC2012_FinalsB.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2012 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1921505
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8558
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $q$ be a fixed odd prime. A prime $p$ is said to be *orange* if for every integer $a$ there exists an integer $r$ such that $r^q \equiv a$ (mod $p$ ). Prove that there are infinitely many *orange* primes.
