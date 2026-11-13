---
tag: FCWE7XRQS9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2000 JBMO ShortLists
    url: https://artofproblemsolving.com/community/c6h374842
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=25862
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=171535
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: jbmo-sl/2000
    source: hf-ai-mo-aops
    label: 2000 JBMO ShortLists
  - at: de-bundeswettbewerb/1998
    source: hf-ai-mo-aops
    label: 1998 Bundeswettbewerb Mathematik
  - at: gr-hms/2002
    source: hf-ai-mo-aops
    label: 2002 Greece Junior Math Olympiad
---
Find all the triples $(x,y,z)$ of positive integers such that $xy+yz+zx-xyz=2$ .
