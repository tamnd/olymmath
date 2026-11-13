---
tag: A4AN5HECS9
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2011 Czech-Polish-Slovak Match
    url: https://artofproblemsolving.com/community/c6h423192
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=6380
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=208519
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Czech-Polish-Slovak_Mathematical_Match/train/0000.parquet#row=38
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: caps/2011
    source: hf-ai-mo-aops
    label: 2011 Czech-Polish-Slovak Match
---
A polynomial $P(x)$ with integer coefficients satisfies the following: if $F(x)$ , $G(x)$ , and $Q(x)$ are polynomials with integer coefficients satisfying $P\Big(Q(x)\Big)=F(x)\cdot G(x)$ , then $F(x)$ or $G(x)$ is a constant polynomial. Prove that $P(x)$ is a constant polynomial.
