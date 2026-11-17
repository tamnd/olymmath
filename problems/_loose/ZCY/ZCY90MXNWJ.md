---
tag: ZCY90MXNWJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265952
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: id
    source: hf-indonesian-olympiad
    url: https://huggingface.co/datasets/hafidhsoekma/math-olympiad-indonesian-benchmark
    capture: hf-indonesian-olympiad/data/train-00000-of-00001.parquet#row=1029
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: id-sce/2017
    source: hf-indonesian-olympiad
    label: SCE_SMA_2017
---
Given that $3 \sin x + 4 \cos x = 5$, where $x$ is in $(0, \frac{\pi}{2})$ , find $2 \sin x + \cos x + 4 \tan x$.
