---
tag: RQRF4WVVHZ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2012 China Second Round Olympiad
    url: https://artofproblemsolving.com/community/c6h502332
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=7754
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209844
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/China/train/0001.parquet#row=72
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cn-league/2012
    source: hf-ai-mo-aops
    label: 2012 China Second Round Olympiad
  - at: cn-league
    source: hf-mathnet
    label: China China Mathematical Competition
---
Let $F$ be the focus of parabola $y^2=2px(p>0)$ , with directrix $l$ and two points $A,B$ on it. Knowing that $\angle AFB=\frac{\pi}{3}$ , find the maximal value of $\frac{|MN|}{|AB|}$ , where $M$ is the midpoint of $AB$ and $N$ is the projection of $M$ to $l$ .
