---
tag: VBJWFQF9NP
kind: problem
type: answer
answer: \frac{19}{210}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=98820
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $x \in (0,1), \frac{1}{x} \notin \mathbf{Z}$,
$$
a_{n}=\frac{n x}{(1-x)(1-2 x) \cdots(1-n x)},
$$

where $n=1,2, \cdots$.
We call $x$ a "good number" if and only if $x$ makes the sequence $\left\{a_{n}\right\}$ defined above satisfy
$$
a_{1}+a_{2}+\cdots+a_{10}>-1 \text { and } a_{1} a_{2} \cdots a_{10}>0 \text {. }
$$

Find the sum of the lengths of all intervals on the number line corresponding to all good numbers.
