---
tag: JEK5443Q1P
kind: problem
appearances:
  - at: pumac/2020/ab1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2020 official paper
    url: https://pumac.princeton.edu/s/2020AlgebraBQuestions.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h2747854
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73231
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f(x) = x^2 + (2a + 3)x + (a^2 + 1)$ only has real zeroes. Suppose the smallest possible value of $a$ can be written in the form $p/q$ , where $p, q$ are relatively prime integers. Find $|p| + |q|$ .
