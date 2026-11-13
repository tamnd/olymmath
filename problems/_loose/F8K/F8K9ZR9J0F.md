---
tag: F8K9ZR9J0F
kind: problem
type: answer
answer: "2880"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261716
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
One can define the greatest common divisor of two positive rational numbers as follows: for $a$, $b$, $c$, and $d$ positive integers with $\gcd(a,b)=\gcd(c,d)=1$, write $$\gcd\left(\dfrac ab,\dfrac cd\right) = \dfrac{\gcd(ad,bc)}{bd}.$$ For all positive integers $K$, let $f(K)$ denote the number of ordered pairs of positive rational numbers $(m,n)$ with $m<1$ and $n<1$ such that $$\gcd(m,n)=\dfrac{1}{K}.$$ What is $f(2017)-f(2016)$?
