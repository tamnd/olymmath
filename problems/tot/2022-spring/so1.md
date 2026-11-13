---
tag: 687DZM2GFC
kind: problem
appearances:
  - at: tot/2022-spring/so1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67067
    url: https://problems.ru/view_problem_details_new.php?id=67067
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
    url: https://artofproblemsolving.com/community/c6h2842690p25183769
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Peter picked a positive integer, multiplied it by 5, multiplied the result by 5,then multiplied the result by 5 again and so on. Altogether $k$ multiplications were made. It so happened that the decimal representations of the original number and of all $k$ resulting numbers in this sequence do not contain digit $7$ .
Prove that there exists a positive integer such that it can be multiplied $k$ times by $2$ so that no number in this sequence contains digit $7$ .
