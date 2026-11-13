---
tag: ET9TY65B8P
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=178878
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Consider the sequences of non-zero real numbers $\left(\mathrm{x}_{\mathrm{n}}\right)_{\mathrm{n} \geq 1}$ and $\left(\mathrm{y}_{\mathrm{n}}\right)_{\mathrm{n} \geq 1}$ which satisfy the relations

$x_{n+1}=\frac{4+2 x_{n}+x_{n} y_{n}}{y_{n}}, y_{n+1}=\frac{4+2 y_{n}+x_{n} y_{n}}{x_{n}} , n \in N^{*}$ and $x_{1}=1, y_{1}=4$.

Calculate $\lim _{\mathrm{n} \rightarrow \infty} \mathrm{x}_{\mathrm{n}}$ and $\lim _{\mathrm{n} \rightarrow \infty} \mathrm{y}_{\mathrm{n}}$.
