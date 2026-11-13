---
tag: N5ASMT6480
kind: problem
appearances:
  - at: tot/2004-fall/ja1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65555
    url: https://problems.ru/view_problem_details_new.php?id=65555
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
    url: https://artofproblemsolving.com/community/c6h21848p140835
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let us call a triangle rational if each of its angles is a rational number when measured in degrees. Let us call a point inside triangle rational if joining it to the three vertices of the triangle we get three rational triangles. Show that any acute rational triangle contains at least three distinct rational points.
