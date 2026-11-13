---
tag: Z3Q1TJFMKE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338391
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73899
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263386
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
A certain college student had the night of February 23 to work on a chemistry problem set and a math problem set (both due on February 24, 2006). If the student worked on his problem sets in the math library, the probability of him finishing his math problem set that night is 95% and the probability of him finishing his chemistry problem set that night is 75%. If the student worked on his problem sets in the the chemistry library, the probability of him finishing his chemistry problem set that night is 90% and the probability of him finishing his math problem set that night is 80%. Since he had no bicycle, he could only work in one of the libraries on February 23rd. He works in the math library with a probability of 60%. Given that he finished both problem sets that night, what is the probability that he worked on the problem sets in the math library?
