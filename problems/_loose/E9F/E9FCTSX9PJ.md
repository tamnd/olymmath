---
tag: E9FCTSX9PJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Hong Kong TST
    url: https://artofproblemsolving.com/community/c6h1693993
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17696
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219275
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Hong_Kong/train/0000.parquet#row=356
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: hk-pc/2019
    source: hf-ai-mo-aops
    label: 2019 Hong Kong TST
  - at: hk-pc
    source: hf-mathnet
    label: Hong Kong HKG TST
---
Let $ABC$ be an acute-angled triangle such that $\angle{ACB} = 45^{\circ}$ . Let $G$ be the point of intersection of the three medians and let $O$ be the circumcentre. Suppose $OG=1$ and $OG \parallel BC$ . Determine the length of the segment $BC$ .
