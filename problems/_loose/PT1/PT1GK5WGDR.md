---
tag: PT1GK5WGDR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 JBMO ShortLists
    url: https://artofproblemsolving.com/community/c6h623846
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=8162
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=210232
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2012
    source: hf-ai-mo-aops
    label: 2012 JBMO ShortLists
---
Determine all triples $(m , n , p)$ satisfying :
$$n^{2p}=m^2+n^2+p+1$$
where $m$ and $n$ are integers and $p$ is a prime number.
