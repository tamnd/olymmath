---
tag: EFMS10RADW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Ukraine National Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h387787
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=4409
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206590
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ua-umo/2009
    source: hf-ai-mo-aops
    label: 2009 Ukraine National Mathematical Olympiad
---
Let $x \leq y \leq z \leq t$ be real numbers such that $xy + xz + xt + yz + yt + zt = 1.$ **a)** Prove that $xt < \frac 13,$ b) Find the least constant $C$ for which inequality $xt < C$ holds for all possible values $x$ and $t.$
