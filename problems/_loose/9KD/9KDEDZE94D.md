---
tag: 9KDEDZE94D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IberoAmerican
    url: https://artofproblemsolving.com/community/c6h86792
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=22950
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=224078
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ibero/1993
    source: hf-ai-mo-aops
    label: 1993 IberoAmerican
---
Let $P$ and $Q$ be two distinct points in the plane. Let us denote by $m(PQ)$ the segment bisector of $PQ$ . Let $S$ be a finite subset of the plane, with more than one element, that satisfies the following properties:
(i) If $P$ and $Q$ are in $S$ , then $m(PQ)$ intersects $S$ .
(ii) If $P_1Q_1, P_2Q_2, P_3Q_3$ are three diferent segments such that its endpoints are points of $S$ , then, there is non point in $S$ such that it intersects the three lines $m(P_1Q_1)$ , $m(P_2Q_2)$ , and $m(P_3Q_3)$ .
Find the number of points that $S$ may contain.
