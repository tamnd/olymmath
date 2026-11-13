---
tag: WEP3GT11FD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Silk_Road_Mathematics_Competition/train/0000.parquet#row=35
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: silk-road
    source: hf-mathnet
    label: Silk Road Mathematics Competition XV Silk Road Mathematics Competition
---
Let $a$, $b$ be positive integers and function $f: \mathbb{N} \to \mathbb{N}$ so that for each positive integer $n$, the number $f(n+a)$ is divisible by $f([\sqrt{n}] + b)$. Prove that for each positive integer $n$ there exist $n$ pairwise distinct and pairwise relatively prime positive integers $a_1, a_2, \dots, a_n$ so that the number $f(a_i+1)$ is divisible by $f(a_i)$ for all $i = 1, 2, \dots, n-1$. (Here $[x]$ is an integer part of $x$, i.e. greatest integer not exceeding $x$; $\mathbb{N}$ the set of positive integers.)
