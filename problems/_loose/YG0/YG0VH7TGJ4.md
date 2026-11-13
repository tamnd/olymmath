---
tag: YG0VH7TGJ4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1993 IMO Shortlist
    url: https://artofproblemsolving.com/community/c6h79395
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25246
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226004
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: isl/1993
    source: hf-ai-mo-aops
    label: 1993 IMO Shortlist
---
a) Show that the set $ \mathbb{Q}^{ + }$ of all positive rationals can be partitioned into three disjoint subsets. $ A,B,C$ satisfying the following conditions:
$$ BA = B; \& B^2 = C; \& BC = A;
$$
where $ HK$ stands for the set $ \{hk: h \in H, k \in K\}$ for any two subsets $ H, K$ of $ \mathbb{Q}^{ + }$ and $ H^2$ stands for $ HH.$

b) Show that all positive rational cubes are in $ A$ for such a partition of $ \mathbb{Q}^{ + }.$

c) Find such a partition $ \mathbb{Q}^{ + } = A \cup B \cup C$ with the property that for no positive integer $ n \leq 34,$ both $ n$ and $ n + 1$ are in $ A,$ that is,
$$ \text{min} \{n \in \mathbb{N}: n \in A, n + 1 \in A \} > 34.
$$
