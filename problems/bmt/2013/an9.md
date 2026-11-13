---
tag: G0TSZ7FT0K
kind: problem
appearances:
  - at: bmt/2013/an9
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2013 official paper
    url: https://berkeley.mt/archives/bmt-2013/AnaS2013.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751484
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69745
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260681
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Evaluate the integral $$ \int^1_0\left(\sqrt{(x-1)^3+1}+x^{2/3}-(1-x)^{3/2}-\sqrt[3]{1-x^2}\right)dx $$
