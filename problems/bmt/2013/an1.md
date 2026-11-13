---
tag: HD2PW253DM
kind: problem
appearances:
  - at: bmt/2013/an1
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
    url: https://artofproblemsolving.com/community/c6h2751476
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=69737
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=260673
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find the value of $a$ satisfying
\begin{align*}
a+b&=3
b+c&=11
c+a&=61
\end{align*}
