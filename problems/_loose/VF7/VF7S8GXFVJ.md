---
tag: VF7S8GXFVJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h164871
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44341
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240614
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
A hyper-primitive root is a k-tuple $ (a_{1},a_{2},\dots,a_{k})$ and $ (m_{1},m_{2},\dots,m_{k})$ with the following property:
For each $ a\in\mathbb N$ , that $ (a,m) = 1$ , has a unique representation in the following form:
$$ a\equiv a_{1}^{\alpha_{1}}a_{2}^{\alpha_{2}}\dots a_{k}^{\alpha_{k}}\pmod{m} 1\leq\alpha_{i}\leq m_{i}$$
Prove that for each $ m$ we have a hyper-primitive root.
