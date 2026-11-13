---
tag: SMK60Y02FE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=223932
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We examine the following two sequences: The Fibonacci sequence: $F_{0}= 0, F_{1}= 1, F_{n}= F_{n-1}+F_{n-2 }$ for $n \geq 2$; The Lucas sequence: $L_{0}= 2, L_{1}= 1, L_{n}= L_{n-1}+L_{n-2}$ for $n \geq 2$. It is known that for all $n \geq 0$
$$F_{n}=\frac{\alpha^{n}-\beta^{n}}{\sqrt{5}},L_{n}=\alpha^{n}+\beta^{n}, $$
where $\alpha=\frac{1+\sqrt{5}}{2},\beta=\frac{1-\sqrt{5}}{2}$. These formulae can be used without proof.

Prove that $1+L_{2^{j}}\equiv 0 \pmod{2^{j+1}}$ for $j \geq 0$.
