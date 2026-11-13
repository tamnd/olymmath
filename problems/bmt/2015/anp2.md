---
tag: NA8C48936Y
kind: problem
appearances:
  - at: bmt/2015/anp2
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
    url: https://artofproblemsolving.com/community/c6h2761905
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69898
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260833
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(x)$ be a nonconstant monic polynomial of degree $n$ with rational coefficents that is irreducible, meaning it cannot be factored into two nonconstant rational polynomials. Find and prove a formula for the number of monic complex polynomials that divide $f$ .
