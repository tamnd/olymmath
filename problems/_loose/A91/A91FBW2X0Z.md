---
tag: A91FBW2X0Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2019 Iran MO (3rd Round)
    url: https://artofproblemsolving.com/community/c6h1896548
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=17892
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=219467
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2019
    source: hf-ai-mo-aops
    label: 2019 Iran MO (3rd Round)
  - at: ir-mo
    source: hf-mathnet
    label: Iran 37th Iranian Mathematical Olympiad
---
Call a polynomial $P(x)=a_nx^n+a_{n-1}x^{n-1}+\dots a_1x+a_0$ with integer coefficients primitive if and only if $\gcd(a_n,a_{n-1},\dots a_1,a_0) =1$ .

a)Let $P(x)$ be a primitive polynomial with degree less than $1398$ and $S$ be a set of primes greater than $1398$ .Prove that there is a positive integer $n$ so that $P(n)$ is not divisible by any prime in $S$ .

b)Prove that there exist a primitive polynomial $P(x)$ with degree less than $1398$ so that for any set $S$ of primes less than $1398$ the polynomial $P(x)$ is always divisible by product of elements of $S$ .
