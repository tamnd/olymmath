---
tag: S41YZJ16YK
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Kazakhstan National Olympiad
    url: https://artofproblemsolving.com/community/c6h481151
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6698
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: kz-mo/2011
    source: hf-ai-mo-aops
    label: 2011 Kazakhstan National Olympiad
---
Given are the odd integers $m> 1$ , $k$ , and a prime $p$ such that $p> mk +1$ . Prove that $p^{2}\mid {\binom{k}{k}}^{m}+{\binom{k+1}{k}}^{m}+\cdots+{\binom{p-1}{k}}^{m}$ .
