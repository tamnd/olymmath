---
tag: 8SYR9PEMDG
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=20621
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The program "Cheerful Polynomial" can perform the following operations on a polynomial $P(x)$:
1) transform $P(x)$ into $x P^{\prime}(x)$, where $P^{\prime}(x)$ is the derivative of the polynomial $P(x)$;
2) divide the coefficient of $x^{k}$ by $k$ for any natural number $k$;
3) add any constant to the existing polynomial;
4) remove the monomial of the highest degree from the polynomial.

Can it obtain the polynomial $3 x+1$ from the polynomial $x^{17}+2 x^{15}+4 x^{9}+x^{6}+4 x^{3}+2 x+1$ in several such operations?
