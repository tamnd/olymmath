---
tag: PTDWD4N8CT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 CMIMC Team
    url: https://artofproblemsolving.com/community/c6h1374841
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70691
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261725
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2017
    source: hf-ai-mo-aops
    label: 2017 CMIMC Team
---
Say an odd positive integer $n > 1$ is $\textit{twinning}$ if $p - 2 \mid n$ for every prime $p \mid n$ . Find the number of twinning integers less than 250.
