---
tag: JXKAM4PE05
kind: problem
appearances:
  - at: bmt/2015/an6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2015 official paper
    url: https://berkeley.mt/archives/bmt-2015/AnaS2015.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2761892
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69892
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260827
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The roots of the equation $x^5-180x^4+Ax^3+Bx^2+Cx+D=0$ are in geometric progression. The sum of their reciprocals is $20$ . Compute $|D|$ .
