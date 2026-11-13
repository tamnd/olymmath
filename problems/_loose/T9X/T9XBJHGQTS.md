---
tag: T9XBJHGQTS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Costa Rica - Final Round
    url: https://artofproblemsolving.com/community/c6h2682594
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=37053
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=235077
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cr-mo/2015
    source: hf-ai-mo-aops
    label: 2015 Costa Rica - Final Round
---
Let $P =\{(a, b) / a, b \in \{1, 2, ..., n\}, n \in N\}$ be a set of point of the Cartesian plane and draw horizontal, vertical, or diagonal segments, of length $1$ or $\sqrt 2$ , so that both ends of the segment are in $P$ and do not intersect each other. Furthermore, for each point $(a, b)$ it is true that
i) if $a + b$ is a multiple of $3$ , then it is an endpoint of exactly $3$ segments.
ii) if $a + b$ is an even not multiple of $3$ , then it is an endpoint of exactly $2$ segments.
iii) if $a + b$ is an odd not multiple of $3$ , then it is endpoint of exactly $1$ segment.
a) Check that with $n = 6$ it is possible to satisfy all the conditions.
b) Show that with $n = 2015$ it is not possible to satisfy all the conditions.
