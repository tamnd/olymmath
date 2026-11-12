---
tag: MBMN6GWKCE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=53858
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that every integer $A$ can be represented as

$$
A=a_{0}+2 a_{1}+2^{2} a_{2}+\ldots+2^{\mathrm{n}} a_{\mathrm{n}}
$$

where each of the numbers $a_{\mathrm{k}}=0,1$ or -1 and $a_{\mathrm{k}} a_{\mathrm{k}+1}=0$ for all $0 \leqslant k \leqslant n-1$, and such a representation is unique.
