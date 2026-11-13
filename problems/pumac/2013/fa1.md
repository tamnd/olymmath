---
tag: YTV42W8G70
kind: problem
appearances:
  - at: pumac/2013/fa1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2013 official paper
    url: https://pumac.princeton.edu/s/PUMaC2013_FinalsA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h563009
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10136
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that $$ \frac{1}{a^2+2} + \frac{1}{b^2+2} + \frac{1}{c^2+2} \le \frac{1}{6ab+c^2} + \frac{1}{6bc+a^2} + \frac{1}{6ca+b^2} $$ for all positive real numbers $a$ , $b$ and $c$ satisfying $a^2+b^2+c^2=1$ .
