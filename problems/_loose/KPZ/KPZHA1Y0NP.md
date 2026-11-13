---
tag: KPZHA1Y0NP
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=209630
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all couples of natural numbers $(a,b)$ not relatively prime ($\gcd(a,b)\neq\ 1$) such that
$$\gcd(a,b)+9\operatorname{lcm}[a,b]+9(a+b)=7ab.$$
