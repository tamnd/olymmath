---
tag: XE6674AT4X
kind: problem
appearances:
  - at: bmt/2015/an3
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
    url: https://artofproblemsolving.com/community/c6h2761887
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69889
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260824
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all integer solutions to
\begin{align*}
x^2+2y^2+3z^2&=36,
3x^2+2y^2+z^2&=84,
xy+xz+yz&=-7.
\end{align*}
