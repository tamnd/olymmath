---
tag: 7WCGF795KB
kind: problem
type: answer
answer: The unique sequence is a_n = 1 for all n.
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-mathnet
    url: https://huggingface.co/datasets/ShadenA/MathNet
    capture: hf-mathnet/Argentina/train/0001.parquet#row=175
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
unplaced:
  - at: cono-sur
    source: hf-mathnet
    label: Argentina 29° Olimpiada Matemática del Cono Sur
---
We say a sequence $a_1, a_2, a_3, \dots$ of positive integers is *alagoana* if, for every positive integer $n$, the following two conditions hold simultaneously:
* $a_{n!} = a_1 \cdot a_2 \cdot \dots \cdot a_n$.
* $a_n$ is the $n$th power of a positive integer.
Determine all the sequences that are *alagoanas*.
(Note that $n! = 1 \cdot 2 \cdot 3 \cdot \dots \cdot n$. For example, $4! = 1 \cdot 2 \cdot 3 \cdot 4 = 24$. Thus, our sequence satisfies, for example, $a_{24} = a_{4!} = a_1 \cdot a_2 \cdot a_3 \cdot a_4$.)
