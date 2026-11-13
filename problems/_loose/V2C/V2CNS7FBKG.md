---
tag: V2CNS7FBKG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1965 All Russian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1859283
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55097
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248464
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1965
    source: hf-ai-mo-aops
    label: 1965 All Russian Mathematical Olympiad
---
Quasi-rounding is a substitution one of the two closest integers instead of the given number. Given $n$ numbers. Prove that you can quasi-round them in such a way, that a sum of every subset of quasi-rounded numbers will deviate from the sum of the same subset of initial numbers not greater than $(n+1)/4$ .
