---
tag: N38HRNM4AA
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/JBMO/train/0000.parquet#row=19
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: md-mo
    source: hf-mathnet
    label: JBMO THE 47-th MATHEMATIAL OLYMPIAD OF REPUBLIC OF MOLDOVA
---
Let $a > 1$ be a non-integer number and $a \neq \sqrt[p]{q}$ for every positive integers $p \geq 2$ and $q \geq 1$, $k = [\log_{a} n] \geq 1$, where $[x]$ is the integral part of the real number $x$. Prove that for every positive integer $n \geq 1$ the equality
$$
[\log_{a} 2] + [\log_{a} 3] + \ldots + [\log_{a} n] + [a] + [a^{2}] + \ldots + [a^{k}] = n k
$$
holds.
