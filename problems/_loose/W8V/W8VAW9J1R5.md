---
tag: W8VAW9J1R5
kind: problem
type: answer
answer: "n"
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=263993
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Let $n \geq 3$ be an integer. Let $f$ be a function from the set of all integers to itself with the following property: If the integers $a_1,a_2,\ldots,a_n$ form an arithmetic progression, then the numbers
$$f(a_1),f(a_2),\ldots,f(a_n)$$
form an arithmetic progression (possibly constant) in some order. Find all values for $n$ such that the only functions $f$ with this property are the functions of the form $f(x)=cx+d$, where $c$ and $d$ are integers.
