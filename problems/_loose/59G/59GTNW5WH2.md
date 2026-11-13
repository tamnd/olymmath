---
tag: 59GTNW5WH2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1999 All-Russian Olympiad
    url: https://artofproblemsolving.com/community/c6h267474
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55723
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=249108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1999
    source: hf-ai-mo-aops
    label: 1999 All-Russian Olympiad
---
Initially numbers from 1 to 1000000 are all colored black. A move consists of picking one number, then change the color (black to white or white to black) of itself and all other numbers NOT coprime with the chosen number. Can all numbers become white after finite numbers of moves?

Edited by pbornsztein
