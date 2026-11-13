---
tag: SV1A662MT7
kind: problem
appearances:
  - at: tot/2004-fall/ja4
    primary: true
  - at: tot/2004-fall/sa3
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 65558
    url: https://problems.ru/view_problem_details_new.php?id=65558
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
    url: https://artofproblemsolving.com/community/c6h21851p140839
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228728
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Vanya has chosen two positive numbers, x and y. He wrote the numbers x+y, x-y, x/y, and xy, and has shown these numbers to Petya. However, he didn't say which of the numbers was obtained from which operation. Show that Petya can uniquely recover x and y.
