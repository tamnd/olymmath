---
tag: G4TZVG7YER
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1989 IMO Longlists
    url: https://artofproblemsolving.com/community/c6h226821
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=24970
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=225657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ill/1989
    source: hf-ai-mo-aops
    label: 1989 IMO Longlists
---
For every sequence $ (x_1, x_2, \ldots, x_n)$ of non-zero natural prime numbers, $ \{1, 2, \ldots, n\}$ arranged in any order, denote by $ f(s)$ the sum of absolute values of the differences between two consecutive members of $ s.$ Find the maximum value of $ f(s)$ where $ s$ runs through the set of all such sequences, i.e. for all sequences $ s$ with the given properties.
