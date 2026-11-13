---
tag: 9HJM84SM6X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h486111
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=42238
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=238823
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2006
    source: hf-ai-mo-aops
    label: 2006 India IMO Training Camp
---
Let $ABC$ be an equilateral triangle, and let $D,E$ and $F$ be points on $BC,BA$ and $AB$ respectively. Let $\angle BAD= \alpha, \angle CBE=\beta$ and $\angle ACF =\gamma$ . Prove that if $\alpha+\beta+\gamma \geq 120^\circ$ , then the union of the triangular regions $BAD,CBE,ACF$ covers the triangle $ABC$ .
