---
tag: 8KDMSDYREY
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2005 Iran Team Selection Test
    url: https://artofproblemsolving.com/community/c6h34209
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44534
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240772
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-tst/2005
    source: hf-ai-mo-aops
    label: 2005 Iran Team Selection Test
---
Suppose $S= \{1,2,\dots,n\}$ and $n \geq 3$ . There is $f:S^k \longmapsto S$ that if $a,b \in S^k$ and $a$ and $b$ differ in all of elements then $f(a) \neq f(b)$ . Prove that $f$ is a function of one of its elements.
