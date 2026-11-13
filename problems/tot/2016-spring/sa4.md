---
tag: 8J5D470YEY
kind: problem
appearances:
  - at: tot/2016-spring/sa4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65735
    url: https://problems.ru/view_problem_details_new.php?id=65735
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
    url: https://artofproblemsolving.com/community/c6h1312977p7040107
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216627
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $64$ towns in a country and some pairs of towns are connected by roads but we do not know these pairs. We may choose any pair of towns and find out whether they are connected or not. Our aim is to determine whether it is possible to travel from any town to any other by a sequence of roads. Prove that there is no algorithm which enables us to do so in less than $2016$ questions.

(Proposed by Konstantin Knop)
