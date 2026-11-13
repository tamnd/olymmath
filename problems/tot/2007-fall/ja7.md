---
tag: 74HBR6D9DC
kind: problem
appearances:
  - at: tot/2007-fall/ja7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 64586
    url: https://problems.ru/view_problem_details_new.php?id=64586
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
    url: https://artofproblemsolving.com/community/c6h428428p2425088
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=228862
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
For each letter in the English alphabet, William assigns an English word which contains that letter. His first document consists only of the word assigned to the letter $A$ . In each subsequent document, he replaces each letter of the preceding document by its assigned word. The fortieth document begins with "Till whatsoever star that guides my moving." Prove that this sentence reappears later in this document.
