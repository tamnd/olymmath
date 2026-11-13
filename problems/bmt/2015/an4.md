---
tag: 1BGA5V9ZVV
kind: problem
appearances:
  - at: bmt/2015/an4
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
    url: https://artofproblemsolving.com/community/c6h2761888
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69890
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\{a_n\}$ be a sequence of real numbers with $a_1=-1$ , $a_2=2$ and for all $n\ge3$ , $$ a_{n+1}-a_n-a_{n+2}=0. $$ Find $a_1+a_2+a_3+\ldots+a_{2015}$ .
