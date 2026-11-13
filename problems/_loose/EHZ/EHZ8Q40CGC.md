---
tag: EHZ8Q40CGC
kind: problem
type: answer
answer: "24"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=261741
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Define a sequence of polynomials $F_n(x)$ by $F_0(x)=0, F_1(x)=x-1$, and for $n\geq 1$, $$F_{n+1}(x)=2xF_n(x)-F_{n-1}(x)+2F_1(x).$$ For each $n$, $F_n(x)$ can be written in the form $$F_n(x)=c_nP_1(x)P_2(x)\cdots P_{g(n)}(x)$$ where $c_n$ is a constant and $P_1(x),P_2(x)\cdots, P_{g(n)}(x)$ are non-constant polynomials with integer coefficients and $g(n)$ is as large as possible. For all $2< n< 101$, let $t$ be the minimum possible value of $g(n)$ in the above expression; for how many $k$ in the specified range is $g(k)=t$?
