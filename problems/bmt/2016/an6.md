---
tag: GRTH881FMF
kind: problem
appearances:
  - at: bmt/2016/an6
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2016 official paper
    url: https://berkeley.mt/archives/bmt-2016/AnaS2016.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2016 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3274319
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69998
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260933
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Amy is traveling on the $xy$ -plane in a spaceship where her motion is described by the following equation $xe^y = ye^x$ . Given that her $x$ -component of velocity is a constant $3$ mph , the magnitude of her velocity as she approaches $(1,-1)$ can be expressed as $\sqrt{\frac{a + be^4}{ c + de^2}}$ . Find $\frac{ac}{bd}$ .
(You may assume that the initial conditions do allow her to approach $(1,-1)$ )
