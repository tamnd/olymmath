---
tag: Q28W4HCR7C
kind: problem
type: answer
answer: 2^{2014}
canonical:
  statement: S1
  rule: derived
statements:
  - id: S1
    lang: en
    source: hf-numinamath-1-5
    url: https://huggingface.co/datasets/project-numina/NuminaMath-1.5
    capture: hf-numinamath-1-5/data/train-00000-of-00003.parquet#row=181540
    origin: D
    zone: Z2
    kind: transcription
status:
  statement: captured
---
Caboyara, a famous Australian circus performer, is also performing a great trick this year. He prepares a spectacular ladder with $N=p_{1} \cdot p_{2} \cdot \ldots \cdot p_{2015}$ steps, where $p_{1}, p_{2}, \ldots, p_{2015}$ are distinct prime numbers; the steps that correspond to divisors of $N$ (including the first and the $N$-th step) are special and are initially lit in green.

During the performance, 2015 trained kangaroos climb the ladder one after another; for $i=$ $1,2, \ldots, 2015$, the $i$-th kangaroo jumps $p_{i}$ steps at a time, starting at the bottom of the ladder (jumping to step $p_{i}$, then to $2 p_{i}$, and so on until reaching step $N$). Each time a kangaroo jumps on a special step, it changes color: from green to red, from red to green.

How many special steps will be lit in green at the end of the performance?
(A) $2^{2015}-2^{1008}$
(B) $2^{2014}$
(C) $2^{2014}-2^{1007}$
(D) $2^{2013}$
(E) $2015 \cdot 2^{1008}$
