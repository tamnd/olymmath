---
tag: VCGWANTY3Y
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2018 Romania National Olympiad
    url: https://artofproblemsolving.com/community/c6h1622910
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=16924
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218563
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=208
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-nmo/2018
    source: hf-ai-mo-aops
    label: 2018 Romania National Olympiad
  - at: ro-nmo
    source: hf-mathnet
    label: Romania 69th Romanian Mathematical Olympiad - Final Round
---
Let $\mathcal{F}$ be the set of continuous functions $f: \mathbb{R} \to \mathbb{R}$ such that $$ e^{f(x)}+f(x) \geq x+1, \: \forall x \in \mathbb{R} $$ For $f \in \mathcal{F},$ let $$ I(f)=\int_0^ef(x) dx $$ Determine $\min_{f \in \mathcal{F}}I(f).$ *Liviu Vlaicu*
