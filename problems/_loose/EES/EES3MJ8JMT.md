---
tag: EES3MJ8JMT
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h534338
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9579
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211573
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=152
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: in-tst/2013
    source: hf-ai-mo-aops
    label: 2013 India IMO Training Camp
  - at: in-tst/2013
    source: hf-mathnet
    label: India Indija TS 2013
---
For a positive integer $n$ , a cubic polynomial $p(x)$ is said to be *$n$ -good* if there exist $n$ distinct integers $a_1, a_2, \ldots, a_n$ such that all the roots of the polynomial $p(x) + a_i = 0$ are integers for $1 \le i \le n$ . Given a positive integer $n$ prove that there exists an $n$ -good cubic polynomial.
