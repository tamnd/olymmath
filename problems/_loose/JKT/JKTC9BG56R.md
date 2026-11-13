---
tag: JKTC9BG56R
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1219303
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14521
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216315
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2016
    source: hf-ai-mo-aops
    label: 2016 Online Math Open Problems
---
Let $f(n)=1 \times 3 \times 5 \times \cdots \times (2n-1)$ . Compute the remainder when $f(1)+f(2)+f(3)+\cdots +f(2016)$ is divided by $100.$ *Proposed by James Lin*
