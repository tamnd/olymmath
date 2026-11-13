---
tag: 8RAF86A7JZ
kind: problem
appearances:
  - at: tot/2005-fall/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65835
    url: https://problems.ru/view_problem_details_new.php?id=65835
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
    url: https://artofproblemsolving.com/community/c6h1072116p4666518
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228778
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Two operations are allowed:

(i) to write two copies of number $1$ ;
(ii) to replace any two identical numbers $n$ by $(n + 1)$ and $(n - 1)$ .

Find the minimal number of operations that required to produce the number $2005$ (at the beginning there are no numbers).

*(8 points)*
