---
tag: 7T2DHY2DES
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h311099
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55795
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249196
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/2003
    source: hf-ai-mo-aops
    label: 2003 All-Russian Olympiad
---
Let $ a_0$ be a natural number. The sequence $ (a_n)$ is deﬁned by $ a_{n+1}=\frac{a_n}{5}$ if $ a_n$ is divisible by $ 5$
and $ a_{n+1}=[a_n \sqrt{5}]$ otherwise . Show that the sequence $ a_n$ is increasing starting from some term.
