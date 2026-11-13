---
tag: D8KSKBK22Z
kind: problem
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=252936
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Find all sets $S$ of positive integers that satisfy all of the following.

$1.$ If $a,b$ are two not necessarily distinct elements in $S$, then $\gcd(a,b)$, $ab$ are also in $S$.
$2.$ If $m,n$ are two positive integers with $n\nmid m$, then there exists an element $s$ in $S$ such that $m^2\mid s$ and $n^2\nmid s$.
$3.$ For any odd prime $p$, the set formed by moduloing all elements in $S$ by $p$ has size exactly $\frac{p+1}2$.
