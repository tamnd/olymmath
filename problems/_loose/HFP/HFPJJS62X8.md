---
tag: HFPJJS62X8
kind: problem
type: answer
answer: "12"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=180785
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given integers $n$ and $k$, with $1 \leq k \leq n$, we define a polynomial of degree $n-1$ as follows:

$$
p(x)=\frac{(x+1)(x+2) \ldots(x+n)}{(x+k)} .
$$

For example, if $n=5$ and $k=2$, we have $p(x)=(x+1)(x+3)(x+4)(x+5)$. Suppose that for a certain choice of $n$ and $k$, the coefficient of $x^{n-2}$ in the polynomial $p(x)$ is equal to 67. What is the value of $n$ in this case?
(A) 68
(B) 10
(C) 12
(D) 11
(E) 69
