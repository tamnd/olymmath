---
tag: 1B7PV707AP
kind: problem
appearances:
  - at: tot/2020-spring/ja6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66856
    url: https://problems.ru/view_problem_details_new.php?id=66856
    origin: H2
    zone: Z3
    kind: transcription
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: AI-MO AoPS
    url: https://huggingface.co/datasets/project-numina/aops
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-aops-wiki
    name: AoPS wiki problems
    url: https://artofproblemsolving.com/community/c6h2141898p15731356
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221065
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice has a deck of $36$ cards, $4$ suits of $9$ cards each. She picks any $18$ cards and gives the rest to Bob. Now each turn Alice picks any of her cards and lays it face-up onto the table, then Bob similarly picks any of his cards and lays it face-up onto the table. If this pair of cards has the same suit or the same value, Bob gains a point. What is the maximum number of points he can guarantee regardless of Alice's actions?

Mikhail Evdokimov
