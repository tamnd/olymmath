---
tag: TWP5MZ8DKH
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Romania Team Selection Test
    url: https://artofproblemsolving.com/community/c6h150159
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=54589
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248090
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst/2007
    source: hf-ai-mo-aops
    label: 2007 Romania Team Selection Test
---
Consider the set $E = \{1,2,\ldots,2n\}$ . Prove that an element $c \in E$ can belong to a subset $A \subset E$ , having $n$ elements, and such that any two distinct elements in $A$ do not divide one each other, if and only if $$c > n \left( \frac{2}{3}\right )^{k+1},$$ where $k$ is the exponent of $2$ in the factoring of $c$ .
