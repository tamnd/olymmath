---
tag: 4RV34YMYNE
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=221632
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
We call a polynomial $P(x)=a_dx^d+...+a_0$ of degree $d$ *nice* if
$$\frac{2021(|a_d|+...+|a_0|)}{2022}<max_{0 \le i \le d}|a_i|$$
Initially Shayan has a sequence of $d$ distinct real numbers; $r_1,...,r_d \neq \pm 1$. At each step he choose a positive integer $N>1$ and raises the $d$ numbers he has to the exponent of $N$, then delete the previous $d$ numbers and constructs a monic polynomial of degree $d$ with these number as roots, then examine whether it is nice or not. Prove that after some steps, all the polynomials that shayan produces would be nice polynomials

Proposed by *Navid Safaei*
