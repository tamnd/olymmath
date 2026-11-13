---
tag: GGRRTWV4W1
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h387786
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4408
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206589
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ukraine/train/0000.parquet#row=131
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2009
    source: hf-ai-mo-aops
    label: 2009 Ukraine National Mathematical Olympiad
  - at: ua-umo
    source: hf-mathnet
    label: Ukraine 49th Mathematical Olympiad in Ukraine
---
In triangle $ABC$ points $M, N$ are midpoints of $BC, CA$ respectively. Point $P$ is inside $ABC$ such that $\angle BAP = \angle PCA = \angle MAC .$ Prove that $\angle PNA = \angle AMB .$
