---
tag: 2Z62GWQMM6
kind: problem
appearances:
  - at: bmt/2014/an8
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
    url: https://artofproblemsolving.com/community/c6h2751550
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Suppose an integer-valued function $f$ satisfies $$ \sum_{k=1}^{2n+1}f(k)=\ln|2n+1|-4\ln|2n-1|\enspace\text{and}\enspace\sum_{k=0}^{2n}f(k)=4e^n-e^{n-1} $$ for all non-negative integers $n$ . Determine $\sum_{n=0}^\infty\frac{f(n)}{2^n}$ .
