---
tag: 7ST6G65MYW
kind: problem
appearances:
  - at: bmt/2015/an8
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
    url: https://artofproblemsolving.com/community/c6h2761896
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69894
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $\omega$ be a primitive $7$ th root of unity. Find $$ \prod_{k=0}^6\left(1+\omega^k-\omega^{2k}\right). $$ (A complex number is a primitive root of unity if and only if it can be written in the form $e^{2k\pi i/n}$ , where $k$ is relatively prime to $n$ .)
