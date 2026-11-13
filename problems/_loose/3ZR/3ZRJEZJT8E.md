---
tag: 3ZRJEZJT8E
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2020 USEMO
    url: https://artofproblemsolving.com/community/c6h2318791
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=19590
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=157277
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: usemo/2020
    source: hf-ai-mo-aops
    label: 2020 USEMO
---
Prove that for every odd integer $n > 1$ , there exist integers $a, b > 0$ such that, if we let $Q(x) = (x + a)^
2 + b$ , then the following conditions hold: $\bullet$ we have $\gcd(a, n) = gcd(b, n) = 1$ ; $\bullet$ the number $Q(0)$ is divisible by $n$ ; and $\bullet$ the numbers $Q(1), Q(2), Q(3), \dots$ each have a prime factor not dividing $n$ .
