---
tag: ZVCN2F8BEF
kind: problem
appearances:
  - at: tot/2019-fall/jo3
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66819
    url: https://problems.ru/view_problem_details_new.php?id=66819
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
    url: https://artofproblemsolving.com/community/c6h2068067p14786184
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229070
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There is a row of $100$ cells each containing a token. For $1$ dollar it is allowed to interchange two neighbouring tokens. Also it is allowed to interchange with no charge any two tokens such that there are exactly $3$ tokens between them. What is the minimum price for arranging all the tokens in the reverse order?

(Egor Bakaev)
