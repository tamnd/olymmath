---
tag: E6F4QXBX8D
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 1964 All Russian Mathematical Olympiad
    url: https://artofproblemsolving.com/community/c6h1858625
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=55086
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248444
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ru-allrussian/1964
    source: hf-ai-mo-aops
    label: 1964 All Russian Mathematical Olympiad
---
Find integer solutions $(x,y)$ of the equation ( $1964$ times " $\sqrt{}$ "): $$ \sqrt{x+\sqrt{x+\sqrt{....\sqrt{x+\sqrt{x}}}}}=y $$
