---
tag: GRGWE84SH2
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252832
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $f$ is a polynomial sends $\mathbb Z$ to $\mathbb Z$ and for $n\in\mathbb N_{\ge2}$, there exists $x\in\mathbb Z$ so that $n\nmid f(x)$, show that for every $k\in\mathbb Z$, there is a non-negative integer $t$ and $a_1,\ldots,a_t\in\{-1,1\}$ such that
$$a_1f(1)+\ldots+a_tf(t)=k.$$
