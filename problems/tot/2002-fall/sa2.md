---
tag: ACK4WTRQ0T
kind: problem
appearances:
  - at: tot/2002-fall/sa2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98598
    url: https://problems.ru/view_problem_details_new.php?id=98598
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
    url: https://artofproblemsolving.com/community/c6h589914p3493340
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228653
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A cube is cut by a plane such that the cross section is a pentagon. Show there is a side of the pentagon of length $\ell$ such that the inequality holds:
$$ |\ell-1|>\frac{1}{5} $$
