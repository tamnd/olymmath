---
tag: XMBTP0W9CT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h65860
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44176
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240449
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
Suppose $f : \mathbb{N} \longrightarrow \mathbb{N}$ is a function that satisfies $f(1) = 1$ and
$f(n + 1) =\{\begin{array}{cc} f(n)+2&\text{if}\ n=f(f(n)-n+1),f(n)+1& \text{Otherwise}\end {array}$

$(a)$ Prove that $f(f(n)-n+1)$ is either $n$ or $n+1$ .
$(b)$ Determine $f$ .
