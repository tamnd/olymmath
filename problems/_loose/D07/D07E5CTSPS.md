---
tag: D07E5CTSPS
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2007 Irish Math Olympiad
    url: https://artofproblemsolving.com/community/c6h287220
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44867
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=241105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo/2007
    source: hf-ai-mo-aops
    label: 2007 Irish Math Olympiad
---
Let $ ABC$ be a triangle the lengths of whose sides $ BC,CA,AB,$ respectively, are denoted by $ a,b,$ and $ c$ . Let the internal bisectors of the angles $ \angle BAC, \angle ABC, \angle BCA,$ respectively, meet the sides $ BC,CA,$ and $ AB$ at $ D,E,$ and $ F$ . Denote the lengths of the line segments $ AD,BE,CF$ by $ d,e,$ and $ f$ , respectively. Prove that:

$ def=\frac{4abc(a+b+c) \Delta}{(a+b)(b+c)(c+a)}$ where $ \Delta$ stands for the area of the triangle $ ABC$ .
