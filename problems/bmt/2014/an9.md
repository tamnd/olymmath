---
tag: HDM4RSKF4V
kind: problem
appearances:
  - at: bmt/2014/an9
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2014 official paper
    url: https://berkeley.mt/archives/bmt-2014/AnaS2014.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2014 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2751551
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69821
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find $\alpha$ such that $$ \lim_{x\to0^+}x^\alpha I(x)=a\enspace\text{given}\enspace I(x)=\int^\infty_0\sqrt{1+t}\cdot e^{-xt}dt $$ where $a$ is a nonzero real number.
