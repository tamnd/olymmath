---
tag: DHTZ2H7K8V
kind: problem
appearances:
  - at: tot/2002-fall/ja5
    primary: true
  - at: tot/2002-fall/sa3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 98594
    url: https://problems.ru/view_problem_details_new.php?id=98594
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
    url: https://artofproblemsolving.com/community/c6h589867p3493128
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A convex $N\text{-gon}$ is divided by diagonals into triangles so that no two diagonals intersect inside the polygon. The triangles are painted in black and white so that any two triangles are painted in black and white so that any two triangles with a common side are painted in different colors. For each $N$ find the maximal difference between the numbers of black and white triangles.
