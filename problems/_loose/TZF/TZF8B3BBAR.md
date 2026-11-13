---
tag: TZF8B3BBAR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 Iran MO (2nd round)
    url: https://artofproblemsolving.com/community/c6h375037
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44077
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240350
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo-r2/2002
    source: hf-ai-mo-aops
    label: 2002 Iran MO (2nd round)
---
Let $G$ be a simple graph with $100$ edges on $20$ vertices. Suppose that we can choose a pair of disjoint edges in $4050$ ways. Prove that $G$ is regular.
