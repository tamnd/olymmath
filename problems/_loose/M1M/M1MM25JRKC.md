---
tag: M1MM25JRKC
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Romania/train/0002.parquet#row=185
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ro-tst
    source: hf-mathnet
    label: Romania 69th NMO Selection Tests for BMO and IMO
---
a) Let $n$ be a composite positive integer. Show that there exist integers $a_1, a_2, \dots, a_n$ whose sum is not divisible by $n$, but $n$ divides (at least) one of the numbers
$$
a_k, a_k + a_{k+1}, \dots, a_k + a_{k+1} + \dots + a_{k+n-1},
$$
for all positive integers $k \le n$; $a_k = a_{k-n}$ if $k > n$.

b) Let $p$ be prime and let $a_1, a_2, \dots, a_p$ be integers whose sum is not divisible by $p$. Show that there exists a positive integer $k \le p$ such that $p$ divides none of the numbers
$$
a_k, a_k + a_{k+1}, \dots, a_k + a_{k+1} + \dots + a_{k+p-1},
$$
where $a_k = a_{k-p}$ if $k > p$.
