---
tag: FGTEZC1Z3X
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h1541572
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=78614
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=267461
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2017
    source: hf-ai-mo-aops
    label: 2017 Online Math Open Problems
---
For a positive integer $n$ , define $f(n)=\sum_{i=0}^{\infty}\frac{\gcd(i,n)}{2^i}$ and let $g:\mathbb N\rightarrow \mathbb Q$ be a function such that $\sum_{d\mid n}g(d)=f(n)$ for all positive integers $n$ . Given that $g(12321)=\frac{p}{q}$ for relatively prime integers $p$ and $q$ , find $v_2(p)$ .

*Proposed by Michael Ren*
