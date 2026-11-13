---
tag: XB4MZXR4ST
kind: problem
appearances:
  - at: bmt/2017/an9
    primary: true
canonical:
  statement: S2
  rule: derived
statements:
  - id: S1
    lang: en
    source: berkeley-mt
    name: Berkeley Math Tournament 2017 official paper
    url: https://berkeley.mt/archives/bmt-2017/AnaS2017.pdf
    page: 1
    origin: H1
    zone: Z2
    kind: official
  - id: S2
    lang: en
    source: hf-ai-mo-aops
    name: 2017 BMT Spring
    url: https://artofproblemsolving.com/community/c6h3274354
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=70061
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260996
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_d$ be the number of non-negative integer solutions $(a, b)$ to $a + b = d$ where $a \equiv b$ (mod $n$ ) for a fixed $n \in Z^+$ . Consider the generating function $M(t) = a_0 + a_1t + a_2t^2 + ...$ Consider $$ P(n) = \lim_{t\to 1} \left( nM(t) - \frac{1}{(1 - t)^2} \right). $$ Then $P(n)$ , $n \in Z^+$ is a polynomial in $n$ , so we can extend its domain to include all real numbers while having it remain a polynomial. Find $P(0)$ .
