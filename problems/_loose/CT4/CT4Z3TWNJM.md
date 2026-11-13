---
tag: CT4Z3TWNJM
kind: problem
type: answer
answer: (,b)=(-1,-1)or(-1,3)
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=130638
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Given the functions $f(x)=a x^{2}-2 \sqrt{4+2 b-b^{2}} x, g(x)=-\sqrt{1-(x-a)^{2}}(a, b \in \mathbf{R})$.
(1) Find all real number pairs $(a, b): a \in \mathbf{Z}$, such that there exists $x_{0}$, making $f\left(x_{0}\right)$ the maximum value of $f(x)$, and $g\left(x_{0}\right)$ the minimum value of $g(x)$.
(2) For the real number pairs $(a, b)$ that satisfy the conditions in (1), construct a function $h(x)$ defined on $D=\{x \mid x>-2$ and $x \neq$ $\left.2 k-2, k \in \mathbf{N}^{*}\right\}$, such that when $x \in(-2,0)$, $h(x)=f(x)$, and when $x \in D$, the values of the independent variable that make $h(x)$ achieve its maximum form an arithmetic sequence with $x_{0}$ as the first term.
