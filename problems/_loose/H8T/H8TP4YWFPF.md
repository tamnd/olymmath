---
tag: H8TP4YWFPF
kind: problem
type: answer
answer: \frac{11!}{30}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=129323
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\{1,2,3,4,5,6,7,8,9,10,11\}, f$ be a mapping from $A$ to $A$, satisfying:
(1) For any $x \in A, f_{15}(x)=x$;
(2) For any positive integer $k(1 \leqslant k \leqslant 14)$, there exists at least one $a \in A$ such that $f_{k}(a) \neq a$.
Find the number of $f$ that satisfy the above conditions. Here, it is defined that $f_{1}(x)=f(x), f_{k+1}(x)=f\left(f_{k}(x)\right)(x \in A$, $k=1,2,3, \cdots)$.
