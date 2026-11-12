---
tag: NQNAKT62PD
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=39200
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Prove that the formal derivative has the following properties of the ordinary derivative:

a) $D(f(x)+g(x))=D(f(x))+D(g(x))$

b) $D(f(x) g(x))=f(x) D(g(x))+g(x) D(f(x))$;

c) $D\left(f(x)^{n}\right)=n f(x)^{n-1} D(f(x))$ for any natural number $n$;

d) if the formal series $f(x)^{-1}$ exists, then $D\left(f(x)^{-1}\right)=-f(x)^{-2} D(f(x))$ and $D\left(f(x)^{-n}\right)=-n f(x)^{n-1} D(f(x))$ for any natural number $n$.

e) $D\left(f^{r}\right)=r f^{r-1} D(f)$ for any rational number $r$ and any formal series $f=1+a_{1} x+a_{2} x^{2}+\ldots$
