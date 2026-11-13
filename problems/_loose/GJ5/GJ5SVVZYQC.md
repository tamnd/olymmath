---
tag: GJ5SVVZYQC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=158747
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/United_States/train/0001.parquet#row=219
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Twenty-one girls and twenty-one boys took part in a mathematical competition. It turned out that
(i) each contestant solved at most six problems, and
(ii) for each pair of a girl and a boy, there was at least one problem that was solved by both the girl and the boy.
Show that there is a problem that was solved by at least three girls and at least three boys.
