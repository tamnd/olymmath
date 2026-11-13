---
tag: P0AMRT5QTA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2008 International Zhautykov Olympiad
    url: https://artofproblemsolving.com/community/c6h183916
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25712
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226485
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: zhautykov/2008
    source: hf-ai-mo-aops
    label: 2008 International Zhautykov Olympiad
---
Let $ a, b, c$ be positive integers for which $ abc = 1$ . Prove that
$ \sum \frac{1}{b(a+b)} \ge \frac{3}{2}$ .
