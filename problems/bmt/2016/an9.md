---
tag: D0ZR6D5DRE
kind: problem
appearances:
  - at: bmt/2016/an9
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
    url: https://artofproblemsolving.com/community/c6h3274316
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69996
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260931
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose $p''(x) = 4x^2 + 4x + 2$ where $$ p(x) = a_0 + a_1(x - 1) + a_2(x -2)^2 + a_3(x- 3)^4 + a_4(x-4)^4. $$ We have $p'(-3) = -24$ and $p(x)$ has the unique property that the sum of the third powers of the roots of $p(x)$ is equal to the sum of the fourth powers of the roots of $p(x)$ . Find $a_0$ .
