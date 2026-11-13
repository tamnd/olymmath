---
tag: NS8JXGQYZ3
kind: problem
appearances:
  - at: tot/2019-spring/ja4
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 66748
    url: https://problems.ru/view_problem_details_new.php?id=66748
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
    url: https://artofproblemsolving.com/community/c6h2102836p15208882
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229087
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Each segment whose endpoints are the vertices of a given regular $100$ -gon is colored red, if the number of vertices between its endpoints is even, and blue otherwise. (For example, all sides of the $100$ -gon are red.) A number is placed in every vertex so that the sum of their squares is equal to $1$ . On each segment the product of the numbers at its endpoints is written. The sum of the numbers on the blue segments is subtracted from the sum of the numbers on the red segments. What is the greatest possible result?

(Ilya Bogdanov)
