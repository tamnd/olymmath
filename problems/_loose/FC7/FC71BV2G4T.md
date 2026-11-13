---
tag: FC71BV2G4T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1988 Tournament Of Towns
    url: https://artofproblemsolving.com/community/c6h2477841
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=28060
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228408
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: tot
    source: hf-ai-mo-aops
    label: 1988 Tournament Of Towns
---
Prove that for each vertex of a polyhedron it is possible to attach a natural number so that for each pair of vertices with a common edge, the attached numbers are not relatively prime (i.e. they have common divisors), and with each pair of vertices without a common edge the attached numbers are relatively prime.

(Note: there are infinitely many prime numbers.)
