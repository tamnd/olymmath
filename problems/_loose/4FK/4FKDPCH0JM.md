---
tag: 4FKDPCH0JM
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2021 CMIMC
    url: https://artofproblemsolving.com/community/c6h2471697
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70580
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261867
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cmimc/2021
    source: hf-ai-mo-aops
    label: 2021 CMIMC
---
There are integers $v,w,x,y,z$ and real numbers $0\le \theta < \theta' \le \pi$ such that $$ \cos 3\theta = \cos 3\theta' = v^{-1}, w+x\cos \theta + y\cos 2\theta = z\cos \theta'. $$ Given that $z\ne 0$ and $v$ is positive, find the sum of the $4$ smallest possible values of $v$ .

*Proposed by Vijay Srinivasan*
