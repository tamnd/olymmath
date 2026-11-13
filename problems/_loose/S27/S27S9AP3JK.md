---
tag: S27S9AP3JK
kind: problem
type: answer
answer: "0"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $a_1,a_2,a_3,...$ be a sequence of positive real numbers such that:

(i) For all positive integers $m,n$, we have $a_{mn}=a_ma_n$

(ii) There exists a positive real number $B$ such that for all positive integers $m,n$ with $m<n$, we have $a_m < Ba_n$

Find all possible values of $\log_{2015}(a_{2015}) - \log_{2014}(a_{2014})$
