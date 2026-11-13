---
tag: GM7CFHDXVM
kind: problem
appearances:
  - at: bmt/2013/an5
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2013 official paper
    url: https://berkeley.mt/archives/bmt-2013/AnaS2013.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2013 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751480
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69741
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260677
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose that $c_n=(-1)^n(n+1)$ . While the sum $\sum_{n=0}^\infty c_n$ is divergent, we can still attempt to assign a value to the sum using other methods. The Abel Summation of a sequence, $a_n$ , is $\operatorname{Abel}(a_n)=\lim_{x\to1^-}\sum_{n=0}^\infty a_nx^n$ . Find $\operatorname{Abel}(c_n)$ .
