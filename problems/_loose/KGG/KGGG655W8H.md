---
tag: KGGG655W8H
kind: problem
type: answer
answer: \lceil n/3 \rceil
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=248242
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Fix an integer $n\geq4$. Let $C_n$ be the collection of all $n$-point configurations in the plane, every three points of which span a triangle of area strictly greater than $1.$ For each configuration $C\in C_n$ let $f(n,C)$ be the maximal size of a subconfiguration of $C$ subject to the condition that every pair of distinct points has distance strictly greater than $2.$ Determine the minimum value $f(n)$ which $f(n,C)$ achieves as $C$ runs through $C_n.$

*Radu Bumbăcea and Călin Popescu*
