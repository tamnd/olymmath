---
tag: M21GDBDBGR
kind: problem
appearances:
  - at: bmt/2013/gp2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2013 official paper
    url: https://berkeley.mt/archives/bmt-2013/GeoS2013.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2746520
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69721
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260657
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
From a point $A$ construct tangents to a circle centered at point $O$ , intersecting the circle at $P$ and $Q$ respectively. Let $M$ be the midpoint of $PQ$ . If $K$ and $L$ are points on circle $O$ such that $K, L$ , and $A$ are collinear, prove $\angle MKO = \angle MLO$ .
