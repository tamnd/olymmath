---
tag: R8QYFSFYSM
kind: problem
appearances:
  - at: tot/2022-fall/jo5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67146
    url: https://problems.ru/view_problem_details_new.php?id=67146
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
    url: https://artofproblemsolving.com/community/c6h3016072p27099566
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229158
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Alice has 8 coins. She knows for sure only that 7 of these coins are genuine and weigh the same, while the remaining one is counterfeit and is either heavier or lighter than any of the other 7. Bob has a balance scale. The scale shows which plate is heavier but does not show by how much. For each measurement, Alice pays Bob beforehand a fee of one coin. If a genuine coin has been paid, Bob tells Alice the correct weighing outcome, but if a counterfeit coin has been paid, he gives a random answer. Alice wants to identify 5 genuine coins and not to give any of these coins to Bob. Can Alice achieve this result for sure?
