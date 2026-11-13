---
tag: KYB49P0ZHQ
kind: problem
appearances:
  - at: tot/2002-spring/ja7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98572
    url: https://problems.ru/view_problem_details_new.php?id=98572
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
    url: https://artofproblemsolving.com/community/c6h589258p3489228
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228628
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Some domino pieces are placed in a chain according to standard rules. In each move, we may remove a sub-chain with equal numbers at its ends, turn the whole sub-chain around, and put it back in the same place. Prove that for every two legal chains formed from the same pieces and having the same numbers at their ends, we can transform one to another in a finite sequence of moves.
