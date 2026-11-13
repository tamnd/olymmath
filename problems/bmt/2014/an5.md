---
tag: A5WV2Z7Q43
kind: problem
appearances:
  - at: bmt/2014/an5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2014 official paper
    url: https://berkeley.mt/archives/bmt-2014/AnaS2014.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2014 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751545
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69817
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260753
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Determine $$ \lim_{x\to\infty}\frac{\sqrt{x+2014}}{\sqrt x+\sqrt{x+2014}} $$
