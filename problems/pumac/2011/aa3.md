---
tag: ZMER0H2DHM
kind: problem
appearances:
  - at: pumac/2011/aa3
    primary: true
  - at: pumac/2011/ab6
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: pumac-archive
    name: Princeton University Mathematics Competition 2011 official paper
    url: https://pumac.princeton.edu/s/PUMaC2011_AlgebraA.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Princeton University Math Competition
    url: https://artofproblemsolving.com/community/c6h1920815
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7018
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209147
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Shirley has a magical machine. If she inputs a positive even integer $n$ , the machine will output $n/2$ , but if she inputs a positive odd integer $m$ , the machine will output $m+3$ . The machine keeps going by automatically using its output as a new input, stopping immediately before it obtains a number already processed. Shirley wants to create the longest possible output sequence possible with initial input at most $100$ . What number should she input?
