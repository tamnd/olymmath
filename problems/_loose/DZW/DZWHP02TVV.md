---
tag: DZWHP02TVV
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2016 NIMO Problems
    url: https://artofproblemsolving.com/community/c6h1241654
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=14492
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=216286
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: nimo/2016
    source: hf-ai-mo-aops
    label: 2016 NIMO Problems
---
The equation $x^3 - 3x^2 - 7x - 1 = 0$ has three distinct real roots $a$ , $b$ , and $c$ . If $$\left( \dfrac{1}{\sqrt[3]{a}-\sqrt[3]{b}} + \dfrac{1}{\sqrt[3]{b}-\sqrt[3]{c}} + \dfrac{1}{\sqrt[3]{c}-\sqrt[3]{a}} \right)^2 = \dfrac{p\sqrt[3]{q}}{r}$$ where $p$ , $q$ , $r$ are positive integers such that $\gcd(p, r) = 1$ and $q$ is not divisible by the cube of a prime, find $100p + 10q + r$ .

*Proposed by Michael Tang and David Altizio*
