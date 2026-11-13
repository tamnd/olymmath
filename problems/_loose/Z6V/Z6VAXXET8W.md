---
tag: Z6VAXXET8W
kind: problem
type: answer
answer: R_t
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=217580
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Gourmet Jan compared $n$ restaurants ($n$ is a positive integer). Each pair of restaurants was compared in two categories: tastiness of food and quality of service. For some pairs Jan couldn't tell which restaurant was better in one category, but never in two categories. Moreover, if Jan thought restaurant $A$ was better than restaurant $B$ in one category and restaurant $B$ was better than restaurant $C$ in the same category, then $A$ is also better than $C$ in that category. Prove there exists a restaurant $R$ such that every other restaurant is worse than $R$ in at least one category.
