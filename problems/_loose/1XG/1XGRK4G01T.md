---
tag: 1XGRK4G01T
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=269125
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let be $x_1=\frac{1}{\sqrt[n+1]{n!}}$ and $x_2=\frac{1}{\sqrt[n+1]{(n-1)!}}$ for all $n\in \mathbb{N}^*$ and $f:\left(\left .\frac{1}{\sqrt[n+1]{(n+1)!}},1\right.\right] \to \mathbb{R}$ where $$f(x)=\frac{n+1}{x\ln (n+1)!+(n+1)\ln \left(x^x\right)}$$Prove that the sequence $(a_n)_{n\geq1}$ when $a_n=\int \limits_{x_1}^{x_2}f(x)dx$ is convergent and compute $$\lim \limits_{n \to \infty}a_n$$
