---
tag: 4H2V6PF8C8
kind: problem
appearances:
  - at: tot/2001-spring/jo5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98512
    url: https://problems.ru/view_problem_details_new.php?id=98512
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
    url: https://artofproblemsolving.com/community/c6h424952p2404843
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
On a square board divided into $15 \times 15$ little squares there are $15$ rooks that do not attack each other. Then each rook makes one move like that of a knight. Prove that after this is done a pair of rooks will necessarily attack each other.
