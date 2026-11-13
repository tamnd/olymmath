---
tag: P9AJYJGFTG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h2055654
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19269
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220812
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2020
    source: hf-ai-mo-aops
    label: 2020 Online Math Open Problems
---
Let $ABC$ be a scalene triangle with incenter $I$ and symmedian point $K$ . Furthermore, suppose that $BC = 1099$ . Let $P$ be a point in the plane of triangle $ABC$ , and let $D$ , $E$ , $F$ be the feet of the perpendiculars from $P$ to lines $BC$ , $CA$ , $AB$ , respectively. Let $M$ and $N$ be the midpoints of segments $EF$ and $BC$ , respectively. Suppose that the triples $(M,A,N)$ and $(K,I,D)$ are collinear, respectively, and that the area of triangle $DEF$ is $2020$ times the area of triangle $ABC$ . Compute the largest possible value of $\lceil AB+AC\rceil$ .

*Proposed by Brandon Wang*
