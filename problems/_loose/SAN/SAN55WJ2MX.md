---
tag: SAN55WJ2MX
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h65864
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44177
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240450
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Iran MO (3rd Round)
---
Let $n$ be a positive integer. Suppose $S$ is a set of ordered $n-\text{tuples}$ of
nonnegative integers such that, whenever $(a_1,\dots,an)\in S$ and $b_i$ are nonnegative integers with $b_i\le a_i$ , the $n-\text{tuple}$ $(b_1,\dots,b_n)$ is also in $S$ . If $h_m$
is the number of elements of $S$ with the sum of components equal to $m$ ,
prove that $h_m$ is a polynomial in $m$ for all sufficiently large $m$ .
