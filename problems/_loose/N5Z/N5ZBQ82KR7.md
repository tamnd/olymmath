---
tag: N5ZBQ82KR7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2006 Stanford Mathematics Tournament
    url: https://artofproblemsolving.com/community/c6h338800
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=73908
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263395
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: smt/2006
    source: hf-ai-mo-aops
    label: 2006 Stanford Mathematics Tournament
---
Given $ \triangle{ABC}$ , where $ A$ is at $ (0,0)$ , $ B$ is at $ (20,0)$ , and $ C$ is on the positive $ y$ -axis. Cone $ M$ is formed when $ \triangle{ABC}$ is rotated about the $ x$ -axis, and cone $ N$ is formed when $ \triangle{ABC}$ is rotated about the $ y$ -axis. If the volume of cone $ M$ minus the volume of cone $ N$ is $ 140\pi$ , find the length of $ \overline{BC}$ .
