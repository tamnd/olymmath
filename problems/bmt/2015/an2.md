---
tag: GGSG70V411
kind: problem
appearances:
  - at: bmt/2015/an2
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2015 official paper
    url: https://berkeley.mt/archives/bmt-2015/AnaS2015.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2015 BMT Spring
    url: https://artofproblemsolving.com/community/c6h2761885
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69888
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $g(x)=1+2x+3x^2+4x^3+\ldots$ . Find the coefficient of $x^{2015}$ of $f(x)=\frac{g(x)}{1-x}$ .
