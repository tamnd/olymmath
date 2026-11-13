---
tag: RXMT2AVHFV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020-21 IOQM India
    url: https://artofproblemsolving.com/community/c6h2420140
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42289
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238869
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-prmo-ioqm/2020
    source: hf-ai-mo-aops
    label: 2020-21 IOQM India
---
Five students take a test on which any integer score from $0$ to $100$ inclusive is possible. What is the largest possible difference between the median and the mean of the scores?

*(The median of a set of scores is the middlemost score when the data is arranged in increasing order. It is exactly the middle score when there are an odd number of scores and it is the average of the two middle scores when there are an even number of scores.)*
