---
tag: KQWQWXKCG8
kind: problem
appearances:
  - at: pumac/2012/ca8
    primary: true
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
    url: https://artofproblemsolving.com/community/c6h1927388
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8567
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Proctors Andy and Kristin have a PUMaC team of eight students labelled $s_1, s_2, ... , s_8$ (the PUMaC staff being awful with names). The following occurs: $1$ . Andy tells the students to arrange themselves in a line in arbitrary order. $2$ . Kristin tells each student $s_i$ to move to the current spot of student $s_j$ , where $j \equiv 3i + 1$ (mod $8$ ). $3$ . Andy tells each student $s_i$ to move to the current spot of the student who was in the $i$ th position of the line after step $1$ .
How many possible orders can the students be in now?
