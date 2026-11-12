---
tag: MBVFKXSAPR
kind: problem
type: answer
answer: Thebatchcannotbeaccepted
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=32472
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
A batch of products is accepted if the variance of the controlled size does not significantly exceed 0.2. The corrected sample variance, found from a sample of size $ n=121 $, turned out to be $ s_{x}^{2}=0.3 $. Can the batch be accepted at a significance level of 0.01?
