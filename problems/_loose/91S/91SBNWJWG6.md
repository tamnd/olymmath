---
tag: 91SBNWJWG6
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=259505
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $f(m,1)=f(1,n)=1$ for $m\geq 1, n\geq 1$ and let $f(m,n)=f(m-1, n)+ f(m, n-1) +f(m-1 ,n-1)$ for $m>1$ and $n>1$. Also let
$$ S(n)= \sum_{a+b=n} f(a,b) \,\,\; a\geq 1 \, \text{and} \, b\geq 1.$$
Prove that
$$S(n+2) =S(n) +2S(n+1) \, \text{for} n \geq 2.$$
