---
tag: TE9P3X1TNB
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2015 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1077930
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78531
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267378
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2015
    source: hf-ai-mo-aops
    label: 2015 Online Math Open Problems
---
Let $S$ be the value of
$$\sum_{n=1}^\infty \frac{d(n) + \sum_{m=1}^{\nu_2(n)}(m-3)d\left(\frac{n}{2^m}\right)}{n},$$
where $d(n)$ is the number of divisors of $n$ and $\nu_2(n)$ is the exponent of $2$ in the prime factorization of $n$ . If $S$ can be expressed as $(\ln m)^n$ for positive integers $m$ and $n$ , find $1000n + m$ .

*Proposed by Robin Park*
