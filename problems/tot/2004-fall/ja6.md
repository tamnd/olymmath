---
tag: F7WK1DVPS0
kind: problem
appearances:
  - at: tot/2004-fall/ja6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65560
    url: https://problems.ru/view_problem_details_new.php?id=65560
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
    url: https://artofproblemsolving.com/community/c6h21391p138428
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228716
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two persons are dividing a piece of cheese. The first person cuts it into two pieces, then the second person cuts one of these pieces into two, then again the first person cuts one of the pieces into two, and so until they have 5 pieces. After that the first person chooses one of the pieces, then the second person chooses one of remaining pieces and so on until all pieces are taken. For each of the players, what is the maximal amount of cheese he can get for certain, regardless of the other's actions?
