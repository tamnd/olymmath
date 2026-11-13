---
tag: EM70C3QXT6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h245391
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25691
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226465
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2005
    source: hf-ai-mo-aops
    label: 2005 International Zhautykov Olympiad
---
Let $ m,n$ be integers such that $ 0\le m\le 2n$ . Then prove that the number $ 2^{2n + 2} + 2^{m + 2} + 1$ is perfect square iff $ m = n$ .
