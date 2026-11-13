---
tag: WSKVDR2S1V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 India IMO Training Camp
    url: https://artofproblemsolving.com/community/c6h546367
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=9583
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=211577
    origin: D
    zone: Z2
    kind: transcription
  - id: S3
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/India/train/0000.parquet#row=153
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
For a positive integer $n$ , a *sum-friendly odd partition* of $n$ is a sequence $(a_1, a_2, \ldots, a_k)$ of odd positive integers with $a_1 \le a_2 \le \cdots \le a_k$ and $a_1 + a_2 + \cdots + a_k = n$ such that for all positive integers $m \le n$ , $m$ can be **uniquely** written as a subsum $m = a_{i_1} + a_{i_2} + \cdots + a_{i_r}$ . (Two subsums $a_{i_1} + a_{i_2} + \cdots + a_{i_r}$ and $a_{j_1} + a_{j_2} + \cdots + a_{j_s}$ with $i_1 < i_2 < \cdots < i_r$ and $j_1 < j_2 < \cdots < j_s$ are considered the same if $r = s$ and $a_{i_l} = a_{j_l}$ for $1 \le l \le r$ .) For example, $(1, 1, 3, 3)$ is a sum-friendly odd partition of $8$ . Find the number of sum-friendly odd partitions of $9999$ .
