---
tag: CT4HQKZFMW
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-ai-mo-aops
    name: 2017 Iran MO (3rd round)
    url: https://artofproblemsolving.com/community/c6h1506121
    capture: hf-ai-mo-aops/data/train-00000-of-00001.parquet#row=44391
    origin: D
    zone: Z2
    kind: transcription
  - id: S2
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=240665
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: ir-mo/2017
    source: hf-ai-mo-aops
    label: 2017 Iran MO (3rd round)
---
For prime number $q$ the polynomial $P(x)$ with integer coefficients is said to be factorable if there exist non-constant polynomials $f_q,g_q$ with integer coefficients such that all of the coefficients of the polynomial $Q(x)=P(x)-f_q(x)g_q(x)$ are dividable by $q$ ; and we write: $$ P(x)\equiv f_q(x)g_q(x)\pmod{q} $$ For example the polynomials $2x^3+2,x^2+1,x^3+1$ can be factored modulo $2,3,p$ in the following way: $$ \left\{\begin{array}{lll}
X^2+1\equiv (x+1)(-x+1)\pmod{2}
2x^3+2\equiv (2x-1)^3\pmod{3}
X^3+1\equiv (x+1)(x^2-x+1)
\end{array}\right. $$ Also the polynomial $x^2-2$ is not factorable modulo $p=8k\pm 3$ .

a) Find all prime numbers $p$ such that the polynomial $P(x)$ is factorable modulo $p$ : $$ P(x)=x^4-2x^3+3x^2-2x-5 $$ b) Does there exist irreducible polynomial $P(x)$ in $\mathbb{Z}[x]$ with integer coefficients such that for each prime number $p$ , it is factorable modulo $p$ ?
