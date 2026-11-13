---
tag: XVAJSX5XXJ
kind: problem
appearances:
  - at: tot/2005-spring/sa4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65582
    url: https://problems.ru/view_problem_details_new.php?id=65582
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
    url: https://artofproblemsolving.com/community/c6h1069669p4646348
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228757
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For any function $f(x)$ , define $f^1(x) = f(x)$ and $f^n (x) = f(f^{n-1}(x))$ for any integer $n \ge 2$ . Does there exist a quadratic polynomial $f(x)$ such that the equation $f^n(x) = 0$ has exactly $2^n$ distinct real roots for every positive integer $n$ ?

*(6 points)*
