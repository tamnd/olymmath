---
tag: WT1TCPG81R
kind: problem
appearances:
  - at: tot/2006-spring/so5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65845
    url: https://problems.ru/view_problem_details_new.php?id=65845
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
    url: https://artofproblemsolving.com/community/c6h1140201p5350393
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228795
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Pete has $n^3$ white cubes of the size $1\times1\times1$ . He wants to construct a $n\times n\times n$ cube with all
its faces being completely white. Find the minimal number of the faces of small cubes that Basil must paint (in black colour) in order to prevent Pete from fulfilling his task. Consider the cases:
a) $n = 3$ ; *(3 points)*
b) $n = 1000$ . *(3 points)*
