---
tag: VW7ZQ5DR7C
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2023 ELMO Shortlist
    url: https://artofproblemsolving.com/community/c6h3100560
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69327
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: elmo-sl/2023
    source: hf-ai-mo-aops
    label: 2023 ELMO Shortlist
---
Elmo has 2023 cookie jars, all initially empty. Every day, he chooses two distinct jars and places a cookie in each. Every night, Cookie Monster finds a jar with the most cookies and eats all of them. If this process continues indefinitely, what is the maximum possible number of cookies that the Cookie Monster could eat in one night?

*Proposed by Espen Slettnes*
