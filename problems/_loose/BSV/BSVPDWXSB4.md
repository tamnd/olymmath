---
tag: BSVPDWXSB4
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2013 Online Math Open Problems
    url: https://artofproblemsolving.com/community/c6h560336
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=10092
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=212088
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: omo/2013
    source: hf-ai-mo-aops
    label: 2013 Online Math Open Problems
---
Let $\sigma(n)$ be the number of positive divisors of $n$ , and let $\operatorname{rad} n$ be the product of the distinct prime divisors of $n$ . By convention, $\operatorname{rad} 1 = 1$ . Find the greatest integer not exceeding $$ 100\left(\sum_{n=1}^{\infty}\frac{\sigma(n)\sigma(n \operatorname{rad} n)}{n^2\sigma(\operatorname{rad} n)}\right)^{\frac{1}{3}}. $$*Proposed by Michael Kural*
