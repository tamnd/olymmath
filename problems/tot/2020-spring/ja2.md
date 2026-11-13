---
tag: 6TPW1RQ5X8
kind: problem
appearances:
  - at: tot/2020-spring/ja2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66852
    url: https://problems.ru/view_problem_details_new.php?id=66852
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
    url: https://artofproblemsolving.com/community/c6h2141892p15731335
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221062
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Three legendary knights are fighting against a multiheaded dragon.
Whenever the first knight attacks, he cuts off half of the current number of heads plus one more. Whenever the second knight attacks, he cuts off one third of the current number of heads plus two more. Whenever the third knight attacks, he cuts off one fourth of the current number of heads plus three more. They repeatedly attack in an arbitrary order so that at each step an integer number of heads is being cut off. If all the knights cannot attack as the number of heads would become non-integer, the dragon eats them. Will the knights be able to cut off all the dragon's heads if it has $41!$ heads?

Alexey Zaslavsky
