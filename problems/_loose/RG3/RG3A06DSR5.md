---
tag: RG3A06DSR5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h164537
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44330
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240603
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2007
    source: hf-ai-mo-aops
    label: 2007 Iran MO (3rd Round)
---
a) Let $ n_{1},n_{2},\dots$ be a sequence of natural number such that $ n_{i}\geq2$ and $ \epsilon_{1},\epsilon_{2},\dots$ be a sequence such that $ \epsilon_{i}\in\{1,2\}$ . Prove that the sequence: $$ \sqrt[n_{1}]{\epsilon_{1}+\sqrt[n_{2}]{\epsilon_{2}+\dots+\sqrt[n_{k}]{\epsilon_{k}}}}$$is convergent and its limit is in $ (1,2]$ . Define $ \sqrt[n_{1}]{\epsilon_{1}+\sqrt[n_{2}]{\epsilon_{2}+\dots}}$ to be this limit.
b) Prove that for each $ x\in(1,2]$ there exist sequences $ n_{1},n_{2},\dots\in\mathbb N$ and $ n_{i}\geq2$ and $ \epsilon_{1},\epsilon_{2},\dots$ , such that $ n_{i}\geq2$ and $ \epsilon_{i}\in\{1,2\}$ , and $ x=\sqrt[n_{1}]{\epsilon_{1}+\sqrt[n_{2}]{\epsilon_{2}+\dots}}$
