---
tag: YJ0TDAZKRG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Ireland/train/0000.parquet#row=231
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ie-irmo
    source: hf-mathnet
    label: Ireland Irish Mathematical Olympiad
---
A complex number $z$ is called a root of unity if $z^k = 1$, for some positive integer $k$.
Given a positive integer $n$, let $S_n$ be the set of all roots of unity of the form
$$
\frac{a+bi}{\sqrt{n}}
$$
where $i = \sqrt{-1}$ and $a$ and $b$ are positive integers.
(i) Prove that $S_n$ has less than $\sqrt{n}$ distinct elements.
(ii) Prove that $S_5$ is empty.
