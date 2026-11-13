---
tag: 4C7AHPJK4V
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=71646
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Using Abel's transformation, calculate the following sums:

a) $\sum_{k=1}^{n} k^{2} q^{k-1}$

b) $\sum_{k=1}^{n} k \sin k x$

c) $\sum_{k=1}^{n} k^{2} \cos k x$.

Calculate the first few Fibonacci and Lucas polynomials (see the definitions of Fibonacci and Lucas polynomials here). What values do these polynomials take at $x=1$? Prove that the Lucas polynomials are related to the Fibonacci polynomials by the following relations:

a) $L_{n}(x)=F_{n-1}(x)+F_{n+1}(x)(n \geq 1)$;

b) $F_{n}(x)\left(x^{2}+4\right)=L_{n-1}(x)+L_{n+1}(x)(n \geq 1)$

c) $F_{2 n}(x)=L_{n}(x) F_{n}(x)(n \geq 0)$

d) $\left(L_{n}(x)\right)^{2}+\left(L_{n+1}(x)\right)^{2}=\left(x^{2}+4\right) F_{2 n+1}(x)(n \geq 0)$;

e) $F_{n+2}(x)+F_{n-2}(x)=\left(x^{2}+2\right) F_{n}(x)$.
