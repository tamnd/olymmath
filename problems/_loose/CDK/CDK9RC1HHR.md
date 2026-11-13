---
tag: CDK9RC1HHR
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=218693
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all $f:\mathbb{R}\to\mathbb{R}$ surjective functions such that
$$f(xf(y)+y^2)=f((x+y)^2)-xf(x) $$ for all real numbers $x,y$.
