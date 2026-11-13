---
tag: GETPVKZ6ME
kind: problem
type: answer
answer: a_{n}=2^{n-1},b_{n}=2^{n-1}+1
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=127333
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
The function $f_{n}(x)(n=1,2,3, \cdots)$ is defined as follows:
$$
f_{1}(x)=4\left(x-x^{2}\right)(0 \leqslant x \leqslant 1), f_{n-1}(x)=f_{n}\left(f_{1}(x)\right)(n=1,2, \cdots)
$$

Let the number of $x$ in $[0,1]$ where $f_{n}(x)$ attains its maximum value be $a_{n}$, and the number of $x$ where $f_{n}(x)$ attains its minimum value be $b_{n}$. Try to express $a_{n}$ and $b_{n}$ in terms of $n$, and prove it using mathematical induction.
