---
tag: QE937T3DKC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h489337
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7997
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210054
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2012
    source: hf-ai-mo-aops
    label: 2012 India IMO Training Camp
---
Let $0<x<y<z<p$ be integers where $p$ is a prime. Prove that the following statements are equivalent: $(a) x^3\equiv y^3\pmod p\text{ and }x^3\equiv z^3\pmod p$ $(b) y^2\equiv zx\pmod p\text{ and }z^2\equiv xy\pmod p$
