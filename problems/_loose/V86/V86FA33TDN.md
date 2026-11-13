---
tag: V86FA33TDN
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1990 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h380325
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44009
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/1990
    source: hf-ai-mo-aops
    label: 1990 Iran MO (2nd round)
---
Let $\alpha$ be a root of the equation $x^3-5x+3=0$ and let $f(x)$ be a polynomial with rational coefficients. Prove that if $f(\alpha)$ be the root of equation above, then $f(f(\alpha))$ is a root, too.
