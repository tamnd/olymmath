---
tag: SECA1RAQS5
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=108105
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given $k$ distinct square-free positive integers $a_{1}, a_{2}, \cdots, a_{k}(k \geqslant 2)$. Prove: There exists a positive constant $c$, such that for any positive integer $n$, we have
$$
\left|\sum_{i=1}^{k}\left\{n \sqrt{a_{i}}\right\}\right|>\frac{c}{n^{2^{k}-1}},
$$

where, $\{x\}=x-[x],[x]$ denotes the greatest integer not exceeding the real number $x$.
