---
tag: 88GTKWGKJH
kind: problem
appearances:
  - at: tot/2005-fall/ja1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65823
    url: https://problems.ru/view_problem_details_new.php?id=65823
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
    url: https://artofproblemsolving.com/community/c6h1069950p4649026
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=52510
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A palindrome is a positive integer which reads in the same way in both directions (for example, $1$ , $343$ and $2002$ are palindromes, while $2005$ is not). Is it possible to find $2005$ pairs in the form of $(n, n + 110)$ where both numbers are palindromes?

*(3 points)*
