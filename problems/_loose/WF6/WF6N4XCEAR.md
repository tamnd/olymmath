---
tag: WF6N4XCEAR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2002 China Team Selection Test
    url: https://artofproblemsolving.com/community/c6h254105
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=35763
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=234248
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-tst/2002
    source: hf-ai-mo-aops
    label: 2002 China Team Selection Test
---
There are $ n$ points ( $ n \geq 4$ ) on a sphere with radius $ R$ , and not all of them lie on the same semi-sphere. Prove that among all the angles formed by any two of the $ n$ points and the sphere centre $ O$ ( $ O$ is the vertex of the angle), there is at least one that is not less than $ 2 \arcsin{\frac{\sqrt{6}}{3}}$ .
