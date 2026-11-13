---
tag: J4MJQPYECM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Peru Iberoamerican Team Selection Test
    url: https://artofproblemsolving.com/community/c6h3069089
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=50474
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=246108
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: pe-ibero-tst/2009
    source: hf-ai-mo-aops
    label: 2009 Peru Iberoamerican Team Selection Test
---
Let $P$ be a set of $n \ge 2$ distinct points in the plane, which does not contain any triplet of aligned points. Let $S$ be the set of all segments whose endpoints are points of $P$ . Given two segments $s_1, s_2 \in S$ , we write $s_1 \otimes s_2$ if the intersection of $s_1$ with $s_2$ is a point other than the endpoints of $s_1$ and $s_2$ . Prove that there exists a segment $s_0 \in S$ such that the set $\{s \in S | s_0 \otimes s\}$ has at least $\frac{1}{15}\dbinom{n-2}{2}$ elements
