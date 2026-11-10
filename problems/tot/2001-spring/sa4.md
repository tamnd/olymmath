---
tag: 40D0V7J1QB
kind: problem
appearances:
  - at: tot/2001-spring/sa4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98528
    url: https://problems.ru/view_problem_details_new.php?id=98528
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
    url: https://artofproblemsolving.com/community/c6h424970p2404866
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are two matrices $A$ and $B$ of size $m\times n$ each filled only by "0"s and "1"s. It is given that along any row or column its elements do not decrease (from left to right and from top to bottom).It is also given that the numbers of "1"s in both matrices are equal and for any $k = 1, . . .$ , $m$ the sum of the elements in the top $k$ rows of the matrix $A$ is no less than that of the matrix $B$ . Prove for any $l = 1, . . . $ , $n$ the sum of the elements in left $l$ columns of the matrix $A$ is no greater than that of the matrix $B$ .
