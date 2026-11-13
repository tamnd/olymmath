---
tag: Z9PEZ3R16X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: AHSME
    url: https://artofproblemsolving.com/community/c6h80888
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=65721
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=198741
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
If $F(n+1)=\frac{2F(n)+1}{2}$ for $n=1,2,\ldots$ , and $F(1)=2$ , then $F(101)$ equals:

$\text{(A)} \ 49 \text{(B)} \ 50 \text{(C)} \ 51 \text{(D)} \ 52 \text{(E)} \ 53$
