---
tag: 5PGM0G4FY7
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=220579
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
If $f\in C^{(3)}([0,1])$ such that $f(0)=f(1)=f'(0)=0$ and $|f'''(x)|\le1,(\forall)x\in[0,1]$, show that:
a)
$$|f(x)|\le\frac{x(1-x)}{\sqrt3}\cdot\left(\int^x_0\frac{f(t)}{t(1-t)}dt\right)^{1/2},(\forall)x\in[0,1]$$
b)
$$|f'(x)|\le\frac{1-2x}{\sqrt3}\cdot\left(\int^x_0\frac{|f(t)|}{t(1-t)}dt\right)^{1/2},(\forall)x\in\left[0,\frac12\right]$$
c)
$$\int^1_0(1-x)^2\cdot\frac{|f(x)|}xdx\ge9\int^1_0\left(\frac{f(x)}x\right)^2dx$$

*Proposed by Florin Stănescu and Şerban Cioculescu*
