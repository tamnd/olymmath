---
tag: HQPNHS8DBN
kind: problem
type: answer
answer: "8102"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=265901
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define the Fibonacci numbers such that $F_{1} = F_{2} = 1,$ $F_{k} = F_{k-1} + F_{k-2}$ for $k > 2.$ For large positive integers $n,$ the expression (containing $n$ nested square roots)

$$\sqrt{2023 F^{2}_{2^{1}} + \sqrt{2023 F^{2}_{2^{2}} + \sqrt{2023 F_{2^{3}}^{2} \dots + \sqrt{2023 F^{2}_{2^{n}} }}}}$$

approaches $\frac{a + \sqrt{b}}{c}$ for positive integers $a,b,c$ where $\gcd(a,c) = 1.$ Find $a+b+c.$
