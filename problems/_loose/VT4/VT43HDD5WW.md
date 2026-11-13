---
tag: VT43HDD5WW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h427578
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65694
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198755
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ahsme
    source: hf-ai-mo-aops
    label: AHSME
---
In triangle $ABC$ the medians $AM$ and $CN$ to sides $BC$ and $AB$ , respectively, intersect in point $O$ . $P$ is the midpoint of side $AC$ , and $MP$ intersects $CN$ in $Q$ . If the area of triangle $OMQ$ is $n$ , then the area of triangle $ABC$ is: $\text{(A)}\ 16n \text{(B)}\ 18n \text{(C)}\ 21n \text{(D)}\ 24n \text{(E)}\ 27n$
