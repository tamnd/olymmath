---
tag: FDY49EDW4P
kind: problem
appearances:
  - at: tot/2019-fall/ja5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66831
    url: https://problems.ru/view_problem_details_new.php?id=66831
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
    url: https://artofproblemsolving.com/community/c6h2069044p14799456
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229075
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let us say that the pair $(m, n)$ of two positive different integers m and n is *nice* if $mn$ and $(m + 1)(n + 1)$ are perfect squares. Prove that for each positive integer m there exists at least one $n > m$ such that the pair $(m, n)$ is nice.

(Yury Markelov)
