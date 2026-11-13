---
tag: DPM4GWJ8NE
kind: problem
type: answer
answer: 2^n
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=14
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: rioplatense
    source: hf-mathnet
    label: Argentina Mathematical Olympiad Rioplatense
---
Let $n$ be a positive integer. We call *smooth* a sequence of integers $a_1, a_2, \dots, a_k$, with $1 \le a_i \le n$, if there exists an integer $m$, with $1 \le m < k$, such that $a_1 = a_{k-m+1}, a_2 = a_{k-m+2}, \dots, a_m = a_k$. Furthermore a sequence is *universal* if each of the sequences obtained through replacing $a_k$ by $1, 2, \dots, n$ is smooth. For each $n$ find a universal sequence of minimum length.
