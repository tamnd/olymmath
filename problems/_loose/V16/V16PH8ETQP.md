---
tag: V16PH8ETQP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2014 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h597373
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=11232
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=213177
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2014
    source: hf-ai-mo-aops
    label: 2014 India IMO Training Camp
---
For $j=1,2,3$ let $x_{j},y_{j}$ be non-zero real numbers, and let $v_{j}=x_{j}+y_{j}$ .Suppose that the following statements hold: $x_{1}x_{2}x_{3}=-y_{1}y_{2}y_{3}$ $x_{1}^{2}+x_{2}^{2}+x_{3}^{2}=y_{1}^{2}+y_{2}^{2}+y_{3}^2$ $v_{1},v_{2},v_{3}$ satisfy triangle inequality $v_{1}^{2},v_{2}^{2},v_{3}^{2}$ also satisfy triangle inequality.

Prove that exactly one of $x_{1},x_{2},x_{3},y_{1},y_{2},y_{3}$ is negative.
