---
tag: B1D3M9BEHK
kind: problem
appearances:
  - at: tot/2002-fall/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98602
    url: https://problems.ru/view_problem_details_new.php?id=98602
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
    url: https://artofproblemsolving.com/community/c6h589925p3493402
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence $\{a_n\}_{n\ge 1}$ such that $a_1=1,a_2=2$ and $a_{n+1}$ is the smallest positive integer $m$ such that $m$ hasn't yet occurred in the sequence and also $\text{gcd}(m,a_n)\neq 1$ . Show all positive integers occur in the sequence.
