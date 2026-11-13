---
tag: 1TEYCTVCCX
kind: problem
appearances:
  - at: pumac/2021/ga3
    primary: true
  - at: pumac/2021/gb5
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2021 official paper
    url: https://pumac.princeton.edu/s/GeoA_2021-1.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2021 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2825843
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73301
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263222
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider a circle centered at $O$ . Parallel chords $AB$ of length $8$ and $CD$ of length $10$ are of distance $2$ apart such that $AC < AD$ . We can write $\tan \angle BOD =\frac{a}{b}$ , where $a, b$ are positive integers such that gcd $(a, b) = 1$ . Compute $a + b$ .
