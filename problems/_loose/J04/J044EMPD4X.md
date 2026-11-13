---
tag: J044EMPD4X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2010 Chile National Olympiad
    url: https://artofproblemsolving.com/community/c6h1848575
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=34453
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233282
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cl-mo/2010
    source: hf-ai-mo-aops
    label: 2010 Chile National Olympiad
---
Consider a line $ \ell $ in the plane and let $ B_1, B_2, B_3 $ be different points in $ \ell$ . Let $ A $ be a point that is not in $ \ell$ . Show that there is $ P, Q $ in $ {B_1, B_2, B_3} $ with $ P \ne Q $ so that the distance from $ A $ to $ \ell$ is greater than the distance from $ P $ to the line that passes through $ A $ and $ Q $ .
