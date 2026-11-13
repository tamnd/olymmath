---
tag: 4EPBD3ZBN0
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2003 Moldova National Olympiad
    url: https://artofproblemsolving.com/community/c6h75863
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=48285
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=244178
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo/2003
    source: hf-ai-mo-aops
    label: 2003 Moldova National Olympiad
---
Consider the polynomial $P(x)=X^{2n}-X^{2n-1}+\dots-x+1$ , where
$n\in{N^*}$ . Find the remainder of the division of polynomial
$P(x^{2n+1})$ by $P(x)$ .
