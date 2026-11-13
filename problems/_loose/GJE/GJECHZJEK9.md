---
tag: GJECHZJEK9
kind: problem
type: answer
answer: All positive integers n with n ≡ 1, 7, 17, or 23 modulo 24 (i.e., n = 24p ± 1 or 24p ± 7).
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: zh
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Taiwan/train/0001.parquet#row=21
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
找出所有的正整數 $n$, 存在某個整數 $m$, 使得
$$
\frac{1}{n} \sum_{k=m}^{m+n-1} k^2
$$
也是完全平方數。例如當 $n=7$ 時, 可取 $m=-3$。
