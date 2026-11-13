---
tag: P8PF31RXNF
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 JBMO ShortLists
    url: https://artofproblemsolving.com/community/c6h374857
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25869
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=226583
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2000
    source: hf-ai-mo-aops
    label: 2000 JBMO ShortLists
---
Find all the triples $(x,y,z)$ of real numbers such that
$$2x\sqrt{y-1}+2y\sqrt{z-1}+2z\sqrt{x-1} \ge xy+yz+zx $$
