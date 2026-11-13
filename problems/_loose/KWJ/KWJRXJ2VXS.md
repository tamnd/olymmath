---
tag: KWJRXJ2VXS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 Slovenia National Olympiad
    url: https://artofproblemsolving.com/community/c6h2518725
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=59559
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=251692
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: si-mo/2000
    source: hf-ai-mo-aops
    label: 2000 Slovenia National Olympiad
---
Consider the polynomial $p(x)=a_nx^n+\ldots+a_1x+a_0$ with real coefficients such that $0\le a_i\le a_0$ for each $i=1,2,\ldots,n$ . If $a$ is the coefficient of $x^{n+1}$ in the polynomial $q(x)=p(x)^2$ , prove that $2a\le p(1)^2$ .
