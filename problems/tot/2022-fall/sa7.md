---
tag: F7MSS0J5KN
kind: problem
appearances:
  - at: tot/2022-fall/sa7
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: ru
    source: problems-ru
    name: problems.ru, problem 67165
    url: https://problems.ru/view_problem_details_new.php?id=67165
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
    url: https://artofproblemsolving.com/community/c6h3016102p27099870
    origin: D
    zone: Z2
    kind: transcription
  - id: S4
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=229170
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
There are $N{}$ friends and a round pizza. It is allowed to make no more than $100{}$ straight cuts without shifting the slices until all cuts are done; then the resulting slices are distributed among all the friends so that each of them gets a share off pizza having the same total area. Is there a cutting which gives the above result if a) $N=201$ and b) $N=400$ ?
