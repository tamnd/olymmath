---
tag: WWYZTEK2TE
kind: problem
appearances:
  - at: tot/2007-spring/sa6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66202
    url: https://problems.ru/view_problem_details_new.php?id=66202
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
    url: https://artofproblemsolving.com/community/c6h428410p2425059
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228852
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_0$ be an irrational number such that $0 < a_0 < \frac 12$ . Define $a_n = \min \{2a_{n-1},1 - 2a_{n-1}\}$ for $n \geq 1$ .
[list]**(a)** Prove that $a_n < \frac{3}{16}$ for some $n$ .**(b)** Can it happen that $a_n > \frac{7}{40}$ for all $n$ ?[/list]
