---
tag: SD4QE9DSM0
kind: problem
type: answer
answer: \frac{339}{392}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=233658
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define $\phi_n(x)$ to be the number of integers $y$ less than or equal to $n$ such that $\gcd(x,y)=1$. Also, define $m=\text{lcm}(2016,6102)$. Compute
$$\frac{\phi_{m^m}(2016)}{\phi_{m^m}(6102)}.$$
