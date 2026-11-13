---
tag: 32HQ4MPCBK
kind: problem
appearances:
  - at: tot/2016-spring/ja5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65729
    url: https://problems.ru/view_problem_details_new.php?id=65729
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
    url: https://artofproblemsolving.com/community/c6h1388396p7730197
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216636
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $p$ be a prime integer greater than $10^k$ . Pete took some multiple of $p$ and inserted a $k-$ digit integer $A$ between two of its neighbouring digits. The resulting integer C was again a multiple of $p$ . Pete inserted a $k-$ digit integer $B$ between two of neighbouring digits of $C$ belonging to the inserted integer $A$ , and the result was again a multiple of $p$ . Prove that the integer $B$ can be obtained from the integer $A$ by a permutation of its digits.
*(8 points)*
*Ilya Bogdanov*
