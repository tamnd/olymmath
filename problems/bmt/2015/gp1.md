---
tag: 9DZ1P11DE8
kind: problem
appearances:
  - at: bmt/2015/gp1
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2015 official paper
    url: https://berkeley.mt/archives/bmt-2015/GeoS2015.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2746794
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69862
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260798
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that circles $C_1$ and $C_2$ intersect at $X$ and $Y$ . Let $A, B$ be on $C_1$ , $C_2$ , respectively, such that $A, X, B$ lie on a line in that order. Let $A, C$ be on $C_1$ , $C_2$ , respectively, such that $A, Y, C$ lie on a line in that order. Let $A', B', C'$ be another similarly defined triangle with $A \ne A'$ . Prove that $BB' = CC'$ .
