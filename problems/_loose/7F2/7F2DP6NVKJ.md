---
tag: 7F2DP6NVKJ
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2009 Olympic Revenge
    url: https://artofproblemsolving.com/community/c6h457391
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=3910
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=206095
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: olympic-revenge/2009
    source: hf-ai-mo-aops
    label: 2009 Olympic Revenge
---
Let $d_i(k)$ the number of divisors of $k$ greater than $i$ .
Let $f(n)=\sum_{i=1}^{\lfloor \frac{n^2}{2} \rfloor}d_i(n^2-i)-2\sum_{i=1}^{\lfloor \frac{n}{2} \rfloor}d_i(n-i)$ .
Find all $n \in N$ such that $f(n)$ is a perfect square.
