---
tag: 5TNCZJXT4Q
kind: problem
type: answer
answer: \mathrm{C}_{n}^{k}\mathrm{C}_{n-1}^{k-1}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=132651
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $A=\{1,2, \cdots, n\}(n>1, n \in \mathbf{N})$. Mapping

$f: A \rightarrow A$. Then the number of $f$ that satisfy
$$
f(1) \leqslant f(2) \leqslant \cdots \leqslant f(n),
$$

and whose image takes exactly $k(1<k \leqslant n)$ different values is
$ $
